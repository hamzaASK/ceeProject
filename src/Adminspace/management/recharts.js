
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector,ResponsiveContainer } from 'recharts';



const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle, percent
  } = props;
  return (
    <g>
      <text>jkhkjh</text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={'#EAEAEA'}>{` ${(percent * 100).toFixed(1)}%`}</text>
      {/* <text x={ex+20} y={ey+20} dy={8}  textAnchor="end" fill={fill[2]}>{payload.name}</text> */}

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={'#EAEAEA'}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={'#393A3C'}
      />
    </g>
  );
};


export default class Example extends PureComponent {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const {statistics} = this.props;
  console.log(statistics)
    const data = [
      { name: 'Img', value: statistics.withImage?statistics.withImage:0 },
      { name: 'W.Img', value: statistics.WithoutImage?statistics.WithoutImage:0 },
    ];
  
    return (
        <div style={{ width: '100%', height: 100 }}>
        <ResponsiveContainer>
          <PieChart  >
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={data}
                innerRadius={30}
                outerRadius={40}
                fill={'#393A3C'}
                dataKey="value"
                onMouseEnter={this.onPieEnter}
              />
          </PieChart>
      </ResponsiveContainer> 
      </div>     
    );
  }
}
