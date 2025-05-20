package com.example.token.service;

import com.example.token.model.token;
import com.example.token.repository.tokenrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class tokenservice {

    @Autowired
    private tokenrepository tokenRepository;

    public List<token> getAllTokens() {
        return tokenRepository.findAll();
    }

    public token getTokenById(Long id) {
        return tokenRepository.findById(id).orElse(null);
    }

    

   
public boolean deleteAllTokensByStudentId(String studentId) {
    try {
        tokenRepository.deleteAllByStudentId(studentId);
        return true;
    } catch (Exception e) {
        e.printStackTrace();
        return false;
    }
}

    


public token generateTokenForStudent(String studentId) {
 Optional<token> existingToken = tokenRepository.findByStudentIdAndDoneFalse(studentId);

    if (existingToken.isPresent()) {
        return existingToken.get();  // Return the existing token object
    }


    
    Integer maxTokenNumber = tokenRepository.findMaxTokenNumber();
    int newTokenNumber = (maxTokenNumber == null ? 1 : maxTokenNumber + 1);

    // Create and save a new token
    token newToken = new token();
    newToken.setStudentId(studentId);
    newToken.setTokenNumber(newTokenNumber);
    newToken.setdone(false); 
    

    return tokenRepository.save(newToken);
}


public token getNextPendingToken() {
    return tokenRepository.findFirstByDoneFalseOrderByTokenNumberAsc().orElse(null);
}



}
