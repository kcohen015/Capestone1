package com.Vangoald.springbudget.services;

import com.Vangoald.springbudget.DAO.GoalDAO;
import com.Vangoald.springbudget.models.Goal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class GoalService {
    private final GoalDAO goalDao;

    @Autowired
    public GoalService(@Qualifier("GoalRepository") GoalDAO goalDao) {
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
