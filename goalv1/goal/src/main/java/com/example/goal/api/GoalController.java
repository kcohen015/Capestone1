package com.example.goal.api;

import com.example.goal.model.Goal;
import com.example.goal.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/goals/")
public class GoalController {
    private final GoalService goalService;

    @Autowired
    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    @PostMapping(value="",consumes = MediaType.APPLICATION_JSON_VALUE)
    int insertGoal(@RequestBody Goal goal){
        return goalService.insertGoal(goal);
    }

    @PutMapping(value = "{id}")
    int updateGoal(@PathVariable("id")int id, @RequestBody Goal goal){
        return goalService.updateGoal(id,goal);
    }

    @DeleteMapping(value="{id}")
    int deleteGoal(@PathVariable("id") int id){
        return goalService.deleteGoal(id);
    }
    @GetMapping
    List<Goal> queryGoals(){
        return goalService.queryGoal();
    }
    @GetMapping(value = "{id}")
    Optional<Goal> queryGoal(@PathVariable("id")int id){
        return goalService.queryGoal(id);
    }
}
