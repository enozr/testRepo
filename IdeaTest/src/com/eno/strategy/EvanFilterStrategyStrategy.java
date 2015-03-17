package com.eno.strategy;

/**
 * Created by enoy on 15/1/31.
 */
public class EvanFilterStrategyStrategy implements NumberFilterStrategy {

    /**
     * 是否是偶数？偶数返回true
     * @param num
     * @return
     */
    @Override
    public boolean filter(int num) {
        return num %2 == 0;
    }
}
