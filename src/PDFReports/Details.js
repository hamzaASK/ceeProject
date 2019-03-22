import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactSpeedometer from "react-d3-speedometer"
import PieChart from '../Charts/PieChart'
import Radar from '../Charts/Radar'
import Information from '../Charts/Information'
import Card from '../Components/Card'

export const Water = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title="Eau potable consommée (m3)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    maxValue={100}
                    value={50}
                    needleColor="purple"
                    startColor="dodgerblue"
                    segments={5}
                    endColor="darkblue"
                    textColor="grey"
                />
            }
        />
        <Card // title="Performance"
            content={
                <PieChart
                    height="95%"
                    width="95%"
                    legend={["Eaux consommées", "Eaux recyclées"]}
                    title="Eaux consommées vs. Eaux recyclées"
                    titleFont='15'
                    colorList={['#92D050', 'dodgerblue']}
                    data={[
                        { value: 20, name: "Eaux\nRecyclées" },
                        { value: 30, name: "Eaux\nConsommées" },
                    ]}
                />
            }
        />
        <Card title="Eau recyclée (m3)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    maxValue={100}
                    value={50}
                    needleColor="purple"
                    startColor="red"
                    endColor="limegreen"
                    segments={7}
                    textColor="grey"
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Energy = (consumedEnergy, producedEnergy) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }}>
        <Card title="Energie globale consommée (kWh)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={100}
                    value={consumedEnergy}
                    needleColor="purple"
                    startColor="limegreen"
                    endColor="red"
                    segments={7}
                    textColor="grey"
                />
            }
        />
        <Card //title="Performance"
            content={
                <PieChart
                    height="95%"
                    width="95%"
                    title={"Energie consommée\nConventionnelle vs. Renouvelable"}
                    colorList={['#12B5EA', '#92D050', '#040238', '#30141b']}
                    data={[
                        { value: 30, name: "Energie\nconventionnelle" },
                        { value: 20, name: "Energie\nrenouvelable" }]}
                />
            }
        />
        <Card title="Energie renouvelable consommée (kWh)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={100}
                    value={producedEnergy}
                    needleColor="purple"
                    startColor="limegreen"
                    endColor="red"
                    segments={7}
                    textColor="grey"
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Flora = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 200, padding: 10 }}>
        <Card title={'lang[x].Faune.state_0'}
            content={
                <Information
                    info={'5'}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_1'}
            content={
                <Information
                    info={'7'}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_2'}
            content={
                <Information
                    info={'9'}
                    icon={"/images/indicators/biodiv/danger.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Fauna = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 200, padding: 10 }}>
        <Card title={'lang[x].Faune.state_0'}
            content={
                <Information
                    info={'5'}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_1'}
            content={
                <Information
                    info={'7'}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_2'}
            content={
                <Information
                    info={'9'}
                    icon={"/images/indicators/biodiv/danger.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Carbon = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 500, padding: 10 }}>
        <Card // title="Radar des performances"
            content={
                <Radar
                    name="Performance par secteur"
                    data={[
                        30,
                        20,
                        10,
                        51,
                        70
                    ]}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const General = (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 500, padding: 10 }}>
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
    </ExpansionPanelDetails>
)

export const Identity = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 140, padding: 10 }}>
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'orange', margin: 10, flex: 1 }} />
    </ExpansionPanelDetails>
)

export const Remarks = (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 400, padding: 10 }}>
        <Card title="Remarques" content={<div style={{ height: '80%', width: '100%', backgroundColor: 'whitesmoke' }} />} />
    </ExpansionPanelDetails>
)

export const People = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 80, padding: 10 }}>
        <div style={{ backgroundColor: 'tomato', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'tomato', margin: 10, flex: 1 }} />
        <div style={{ backgroundColor: 'tomato', margin: 10, flex: 1 }} />
    </ExpansionPanelDetails>
)
