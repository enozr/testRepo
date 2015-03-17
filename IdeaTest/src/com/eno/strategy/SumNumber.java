package com.eno.strategy;

import java.util.List;

/**
 * Created by enoy on 15/1/31.
 */
public class SumNumber {

    private NumberFilterStrategy numberFilter = null;

    private final NumberFilterStrategy DEFAULT_STRATEGY = new DefaultFilterStrategy();

    /**
     * 设置用哪个StrategyFilter
     * @param numberFilter
     */
    public void setNumberFilter(NumberFilterStrategy numberFilter) {
        if (numberFilter != null) {
            this.numberFilter = numberFilter;
        } else {
            numberFilter = DEFAULT_STRATEGY;
        }
    }

    /**
     * 计算符合StrategyFilter的总和
     * @param numbers
     * @return
     */
    public int sumAll (List<Integer> numbers) {
        int total = 0;

        for (int number: numbers) {
            if (numberFilter.filter(number))
                total += number;
        }
        return total;
    }
}
