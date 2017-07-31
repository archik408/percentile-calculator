# percentile-calculator
> utility for statistics

## Percentile
From Wikipedia, the free encyclopedia

A percentile (or a centile) is a measure used in statistics indicating the value below which a given percentage of observations in a group of observations fall. For example, the 20th percentile is the value (or score) below which 20% of the observations may be found.

![percentile](https://raw.githubusercontent.com/archik408/percentile-calculator/master/media/percentile.png)

## Quartile
From Wikipedia, the free encyclopedia

In descriptive statistics, the quartiles of a ranked set of data values are the three points that divide the data set into four equal groups, each group comprising a quarter of the data. A quartile is a type of quantile. The first quartile (Q1) is defined as the middle number between the smallest number and the median of the data set. The second quartile (Q2) is the median of the data. The third quartile (Q3) is the middle value between the median and the highest value of the data set.
In applications of statistics such as epidemiology, sociology and finance, the quartiles of a ranked set of data values are the four subsets whose boundaries are the three quartile points. Thus an individual item might be described as being "in the upper quartile".

![quartile](https://raw.githubusercontent.com/archik408/percentile-calculator/master/media/quartiles.png)


## Getting Started

```
npm install percentile-calculator --save
```

Compute Percentile
```javascript
        const PercentileCalculator = require('percentile-calculator');
        const values = [15, 20, 35, 40, 50];
        const calculator = new PercentileCalculator(values);

        console.log(calculator.calculatePercentile(10)); // 15
```

Compute Quartile
```javascript
        const PercentileCalculator = require('percentile-calculator');
        const values = [2, 5, 2, 8, 11, 14, 8, 18, 19, 25, 27, 26];
        const calculator = new PercentileCalculator(values);

        console.log(calculator.calculateQ1()); // 7.25
```


## Tests

```
npm tests
```

![spec](https://raw.githubusercontent.com/archik408/percentile-calculator/master/media/tests.png)



## License
Copyright (c) 2017 archik
Licensed under the MIT license.
