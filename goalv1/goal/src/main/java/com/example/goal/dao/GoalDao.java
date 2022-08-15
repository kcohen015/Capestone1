package com.example.goal.dao;

import com.example.goal.model.Goal;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface GoalDao {
    int insertGoal(int id ,Goal goal);
    default int insertGoal(Goal goal){
        Random rand= new Random();
        int id=rand.nextInt();
        return insertGoal(id,goal);

    }
    int updateGoal(int id, Goal goal);
    int deleteGoal(int id);
    List<Goal>queryGoal();
    Optional<Goal> queryGoal(int id);

}
