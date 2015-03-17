package com.eno.strategy;

import com.eno.strategy.SumNumber;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * Created by enoy on 15/1/31.
 */
public class TestStrategy {
    public static void main (String... args) {

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        int count = 0;

        // 策略模式求和
        SumNumber sum = new SumNumber();
        //设置策略
        sum.setNumberFilter(new DefaultFilterStrategy());
        //求和
        count = sum.sumAll(numbers);
        System.out.println("策略模式求和" + count);
        //设置策略
        sum.setNumberFilter(new EvanFilterStrategyStrategy());
        //求和
        count = sum.sumAll(numbers);
        System.out.println(count);
        //设置策略
        sum.setNumberFilter(new LargeFilterStrategyStrategy());
        count = sum.sumAll(numbers);
        System.out.println(count);

        // Lambda表达式求和
        count = sumAll(numbers, n -> true);
        System.out.println("Lambda表达式求和: " + count);
        count = sumAll(numbers, n -> n % 2 == 0);
        System.out.println(count);
        count = sumAll(numbers, n -> n > 3);
        System.out.println(count);
    }

    /**
     * Java 8 Lambda表达式中的谓词（Predicate）
     * Lambda表达式求和
     * @param numbers
     * @param p
     * @return
     */
    public static int sumAll(List<Integer> numbers, Predicate<Integer> p) {
        int total = 0;
        for (int number : numbers) {

            //p.test???
            if (p.test(number)) {
                total += number;
            }
        }
        return total;
    }
}
