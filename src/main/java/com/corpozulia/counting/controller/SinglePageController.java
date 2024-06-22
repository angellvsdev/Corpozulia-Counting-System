package com.corpozulia.counting.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SinglePageController {

    @GetMapping(value = {"/{path:[^\\.]*}", "/{path:^(?!api|static|ws).*$}/**/{path:[^\\.]*}"})
    public String forward() {
        return "forward:/";
    }
}
