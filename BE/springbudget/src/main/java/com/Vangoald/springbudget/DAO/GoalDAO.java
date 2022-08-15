package com.Vangoald.springbudget.DAO;

import com.Vangoald.springbudget.models.Goal;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface GoalDAO {
    int insertGoal(int id ,Goal goal);
    default int insertGoal(Goal goal) {
        Random rand = new Random();
        int id = rand.nextInt();
        return insertGoal(id, goal);
    }
    int updateGoal(int id, Goal goal);
    int deleteGoal(int id);
    List<Goal> queryGoal();
    Optional<Goal> queryGoal(int id);
}
