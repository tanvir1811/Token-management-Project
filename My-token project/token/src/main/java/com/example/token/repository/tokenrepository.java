package com.example.token.repository;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;
import com.example.token.model.token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface tokenrepository extends JpaRepository<token, Long> {
       
   
     
     Optional<token> findByStudentIdAndDoneFalse(String studentId);

      @Query("SELECT MAX(t.tokenNumber) FROM token t")
       Integer findMaxTokenNumber();

      Optional<token> findFirstByDoneFalseOrderByTokenNumberAsc();
    @Modifying
    @Transactional
    @Query("DELETE FROM token t WHERE t.studentId = :studentId")
    void deleteAllByStudentId(@Param("studentId") String studentId);
}



