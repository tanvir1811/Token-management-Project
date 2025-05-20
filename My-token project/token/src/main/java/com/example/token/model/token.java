package com.example.token.model;
import jakarta.persistence.*;
@Entity
public class token {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentId;
    private int  tokenNumber;
    private boolean done ;

    
   public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentId() { return studentId; }
    public void setStudentId (String studentId) { this.studentId = studentId; }

    public int getTokenNumber() { return tokenNumber; }
    public void setTokenNumber(int tokenNumber) { this.tokenNumber = tokenNumber; }
    public boolean getdone() { return done; }
    public void setdone(boolean done) { this.done = done; }

     }

