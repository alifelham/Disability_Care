package com.example.healthcare.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EmailMismatchException extends RuntimeException {
    public EmailMismatchException(String message) {
        super(message);
    }

    public EmailMismatchException(String message, Throwable cause) {
        super(message, cause);
    }
}
