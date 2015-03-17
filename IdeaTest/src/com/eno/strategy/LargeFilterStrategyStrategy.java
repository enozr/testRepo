package com.eno.strategy;

/**
 * Created by enoy on 15/1/31.
 */
public class LargeFilterStrategyStrategy implements NumberFilterStrategy {

    /**
     * 数字>3返回true
     * @param num
     * @return
     */
    @Override
    public boolean filter(int num) {
        return num>3 ? true:false;
    }
}
