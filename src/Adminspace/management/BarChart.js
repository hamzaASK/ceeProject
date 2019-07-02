import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts';


export default class Example2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7has60ua/';

  state = {
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
      
    
    const data = [
        {
            name: 'Plastique', uv: this.props.statistics.plastique
            },
            {
            name: 'Verre', uv: this.props.statistics.verre
            },
            {
            name: 'Organique', uv: this.props.statistics.organique
            },
            {
            name: 'Metal', uv: this.props.statistics.metal
            },
            {
            name: 'Papier', uv: this.props.statistics.papier
            },
      ];
    const { activeIndex } = this.state;
    const activeItem = data[activeIndex];
    const titre=this.props.titre
    const unity=this.props.unity

    console.log(titre)
    return (
        <ResponsiveContainer>
        <div style={{ width: '100%', height: '100%' }}>
                <p className="content" style={{color:'#eaeaea',fontSize:'23px',fontWeight:'bold'}}>{titre}</p>
                <BarChart data={data} width={230} height={50} style={{  marginRight:'auto',marginLeft:'auto', }}>
                    <Bar dataKey="uv" onClick={this.handleClick}>
                        {
                            data.map((entry, index) => (<Cell cursor="pointer" fill={index === activeIndex ? '#eaeaea' : 'gray'} key={`cell-${index}`} />))
                        }
                    </Bar>
                </BarChart>
                <p className="content" style={{color:'#eaeaea',fontSize:'23px'}}>{`${activeItem.name} : ${activeItem.uv} `}{unity}</p>
        </div>
        </ResponsiveContainer>

    );
  }
}
