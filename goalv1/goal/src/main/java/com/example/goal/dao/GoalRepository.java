package com.example.goal.dao;

import com.example.goal.model.Goal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("GoalRepository")
public class GoalRepository implements GoalDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public int insertGoal(int id, Goal goal) {
        String sql="INSERT INTO GOAL(TITLE,DESCRIPTION,AMOUNT,GOALDATE,FUND)VALUES(?,?,?,?,?)";
        return jdbcTemplate.update(sql,new Object[]{goal.getTitle(),goal.getDescription(),goal.getAmount(),goal.getGoalDate(), goal.getFund()});
    }

    @Override
    public int updateGoal(int id, Goal goal) {
        String sql="UPDATE GOAL SET TITLE=?,DESCRIPTION=?,AMOUNT=?,GOALDATE=?, FUND=? WHERE ID=?";
        return jdbcTemplate.update(sql,new Object[]{goal.getTitle(),goal.getDescription(),goal.getAmount(),goal.getGoalDate(),goal.getFund(),id});
    }

    @Override
    public int deleteGoal(int id) {
        String sql="DELETE FROM GOAL WHERE ID=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public List<Goal> queryGoal() {
        String sql="SELECT * FROM GOAL";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Goal.class));
    }

    @Override
    public Optional<Goal> queryGoal(int id) {
        Goal goal=null;
        try{
            String sql="SELECT * FROM GOAL WHERE ID=?";
            goal = jdbcTemplate.queryForObject(sql,BeanPropertyRowMapper.newInstance(Goal.class),id);
            return Optional.ofNullable(goal);
        }catch(IncorrectResultSizeDataAccessException e){
            return Optional.ofNullable(null);
        }

    }
}
