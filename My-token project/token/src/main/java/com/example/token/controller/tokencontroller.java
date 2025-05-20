package com.example.token.controller;

import com.example.token.model.token;
import com.example.token.service.tokenservice;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/tokens")
public class tokencontroller {

    @Autowired
    private tokenservice tokenService;
   
 
    
    
@GetMapping("/next")
public ResponseEntity<token> getNextTokenForAdmin() {
    token nextToken = tokenService.getNextPendingToken();
    if (nextToken != null) {
        return ResponseEntity.ok(nextToken);
    } else {
        return ResponseEntity.noContent().build(); // No more tokens to process
    }
}

 

    @GetMapping("/student/{studentId}")
public ResponseEntity<token> getTokenByStudentId(@PathVariable String studentId) {
    token t = tokenService.generateTokenForStudent(studentId);
        return ResponseEntity.ok(t);
}

    
@DeleteMapping("/done/{studentId}")
public ResponseEntity<?> deleteTokens(@PathVariable String studentId) {
    boolean deleted = tokenService.deleteAllTokensByStudentId(studentId);
    if (deleted) {
        return ResponseEntity.ok().body(Map.of("message", "All tokens deleted successfully"));
    }
    return ResponseEntity.status(500).body(Map.of("error", "An error occurred while deleting tokens."));
}



  


    
    

    
}

