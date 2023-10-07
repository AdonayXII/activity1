package com.adonay.monsters.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.adonay.monsters.entity.models.Monster;

public interface IMonsterDao extends CrudRepository<Monster, Long>{

}
