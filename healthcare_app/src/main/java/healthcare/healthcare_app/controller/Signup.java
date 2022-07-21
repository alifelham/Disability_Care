package healthcare.healthcare_app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class Signup {

    @RequestMapping ("/login")
    public String start(){
        return "login";
    }
}

