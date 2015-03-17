package com.eno.strategy;

/**
 * Created by enoy on 15/1/31.
 */
public class DefaultFilterStrategy implements NumberFilterStrategy {
    @Override
    public boolean filter(int num) {
        return true;
    }
}
