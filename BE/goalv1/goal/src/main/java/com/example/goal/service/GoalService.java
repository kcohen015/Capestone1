package com.example.goal.service;

import com.example.goal.dao.GoalDao;
import com.example.goal.model.Goal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GoalService {
    private final GoalDao goalDao;

    @Autowired
    public GoalService(@Qualifier("GoalRepository") GoalDao goalDao) {
        this.goalDao = goalDao;
    }
    public int insertGoal(int id, Goal goal){
        return goalDao.insertGoal(goal);
    }
    public int insertGoal(Goal goal){
        return goalDao.insertGoal(goal);
    }
    public int updateGoal(int id,Goal goal){
        return goalDao.updateGoal(id,goal);
    }
    public int deleteGoal(int id){
        return goalDao.deleteGoal(id);
    }
    public List<Goal> queryGoal(){
        return goalDao.queryGoal();
    }
    public Optional<Goal> queryGoal(int id){
        return goalDao.queryGoal(id);
    }
}
