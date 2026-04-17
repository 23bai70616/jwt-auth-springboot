package com.example.jwt_auth.controller;

import com.example.jwt_auth.model.User;
import com.example.jwt_auth.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public Map<String,String> login(@RequestBody User user){

        if(user.getUsername().equals("admin") &&
                user.getPassword().equals("1234")){

            String token = jwtUtil.generateToken(user.getUsername());

            return Map.of("token",token);
        }

        throw new RuntimeException("Invalid Credentials");
    }

    @GetMapping("/protected")
    public String protectedRoute(){

        return "Accessed Protected API";
    }
}
