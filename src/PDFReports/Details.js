import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ReactSpeedometer from "react-d3-speedometer"
import PieChart from '../Charts/PieChart'
import Radar from '../Charts/Radar'
import Information from '../Charts/Information'
import Card from '../Components/Card'
import BarChart from '../Charts/BarChart'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

export const Water = (consumedWater, recycledWater) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title="Eau potable consommée (m3)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    maxValue={consumedWater * 1.5}
                    forceRender={true}
                    value={consumedWater}
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
                        { value: consumedWater, name: "Eaux\nRecyclées" },
                        { value: recycledWater, name: "Eaux\nConsommées" },
                    ]}
                />
            }
        />
        <Card title="Eau recyclée (m3)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={consumedWater * 1.5}
                    value={recycledWater}
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

export const Recycle = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title="Déchets Recyclés (en kg)"
            content={
                <BarChart
                    items={3}
                    barWidth='15%'
                    data1={[0]}
                    data2={[1]}
                    data3={[2]}
                    color1={'#92D050'}
                    color2={'#FF0000'}
                    color3={'#EBEB35'}
                    legend1='Verre'
                    legend2='Metal'
                    legend3='Plastique'
                    title={''}
                    legend={['Verre', 'Metal', 'Plastique']}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
        <Card title="Déchets transformés en Composte (en kg)"
            content={
                <BarChart
                    items={2}
                    barWidth='15%'
                    data1={[3]}
                    data2={[4]}
                    color1={'#C55A11'}
                    color2={'#5B9BD5'}
                    legend1='Organique'
                    legend2='Papier'
                    title={''}
                    legend={['Organique', 'Papier']}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Waste = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title={'lang[x].Waste.indic_1.title'}
            content={
                <BarChart
                    items={3}
                    barWidth='15%'
                    data1={[1]}
                    data2={[2]}
                    data3={[2]}
                    color1={'#92D050'}
                    color2={'#FF0000'}
                    color3={'#EBEB35'}
                    legend1='Verre'
                    legend2='Metal'
                    legend3='Plastique'
                    title={'lang[x].Waste.indic_1.desc'}
                    legend={['Verre', 'Metal', 'Plastique']}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
        <Card title={'lang[x].Waste.indic_2.title'}
            content={
                <BarChart
                    items={2}
                    barWidth='15%'
                    data1={[1]}
                    data2={[2]}
                    color1={'#C55A11'}
                    color2={'#5B9BD5'}
                    legend1='Organique'
                    legend2='Papier'
                    title={'lang[x].Waste.indic_2.desc'}
                    legend={['Organique', 'Papier']}
                    time={['']}
                    height='90%'
                    width='90%'
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Transport = (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 400, padding: 10 }} >
        <Card title="Bilan carbone du transport (Kg équi. CO2)"
            content={
                <BarChart
                    items={5}
                    barWidth='15%'
                    data1={[1]}
                    data2={[1]}
                    data3={[2]}
                    data4={[4]}
                    data5={[3]}
                    color1={'#A0A0A0'}
                    color2={'#C06020'}
                    color3={'#5B9BD5'}
                    color4={'#92D050'}
                    color5={'orange'}
                    legend1='Voiture'
                    legend2='Train'
                    legend3='Tramway'
                    legend4='Bus urbain'
                    legend5='Deux roues'
                    title={''}
                    legend={null}
                    time={['']}
                    height='85%'
                    width='85%'
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
                    maxValue={consumedEnergy * 1.5}
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
                        { value: consumedEnergy, name: "Energie\nconventionnelle" },
                        { value: producedEnergy, name: "Energie\nrenouvelable" }]}
                />
            }
        />
        <Card title="Energie renouvelable consommée (kWh)"
            content={
                <ReactSpeedometer
                    width={300}
                    height={300}
                    forceRender={true}
                    maxValue={consumedEnergy * 1.5}
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

export const Flora = (stat) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 200, padding: 10 }}>
        <Card title={'lang[x].Faune.state_0'}
            content={
                <Information
                    info={stat[2]}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_1'}
            content={
                <Information
                    info={stat[1]}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_2'}
            content={
                <Information
                    info={stat[0]}
                    icon={"/images/indicators/biodiv/danger.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Fauna = (stat) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 200, padding: 10 }}>
        <Card title={'lang[x].Faune.state_0'}
            content={
                <Information
                    info={stat[2]}
                    icon={"/images/indicators/biodiv/good.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_1'}
            content={
                <Information
                    info={stat[1]}
                    icon={"/images/indicators/biodiv/bad.png"}
                    measure={true}
                />
            }
        />
        <Card title={'lang[x].Faune.state_2'}
            content={
                <Information
                    info={stat[0]}
                    icon={"/images/indicators/biodiv/danger.png"}
                    measure={true}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const Carbon = (Energy, Water, Transport, Waste, Other) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 500, padding: 10 }}>
        <Card // title="Radar des performances"
            content={
                <Radar
                    name="Performance par secteur"
                    data={[
                        Transport,
                        Energy,
                        Water,
                        Waste,
                        Other
                    ]}
                />
            }
        />
    </ExpansionPanelDetails>
)

export const General = (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 500, padding: 10 }}>
        <div style={{ margin: 10, flex: 1 }} >
            {"import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails"}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20 }} >Avant-propos</Typography>
        <div style={{ margin: 10, flex: 1 }} >
            {"import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails"}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20 }} >Le centre d'éducation à l'environnement</Typography>
        <div style={{ margin: 10, flex: 1 }} >
            {"import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails"}
        </div>
        <Typography variant="h6" style={{ marginLeft: 20 }} >Le système de monitoring intelligent</Typography>
        <div style={{ margin: 10, flex: 1 }} >
            {"import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails import ExpandMoreIcon from @material-ui/icons/ExpandMore import ExpansionPanelDetails from @material-ui/core/ExpansionPanelDetails"}
        </div>
    </ExpansionPanelDetails>
)

export const Identity = (reference, date, period, place) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 140, padding: 10 }}>
        <form className={""} noValidate autoComplete="off" >
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Référence"
                value={reference}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Date de génération"
                value={date}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 280, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Durée d'activité"
                value={period}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 320, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Lieu"
                value={place}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
        </form>
    </ExpansionPanelDetails>
)

export const Remarks = (
    <ExpansionPanelDetails style={{ flexDirection: 'column', display: 'flex', height: 400, padding: 10 }}>
        <Card title="Remarques" content={<div style={{ height: '80%', width: '100%', backgroundColor: 'whitesmoke' }} />} />
    </ExpansionPanelDetails>
)


// const styles = theme => ({
//     root: {
//         width: 'inherit',
//         margin: 10,
//     },
//     heading: {
//         fontSize: theme.typography.pxToRem(15),
//         fontWeight: theme.typography.fontWeightRegular,
//     },
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//     },
//     dense: {
//         marginTop: 16,
//     },
//     menu: {
//         width: 200,
//     },
// });

export const People = (diffusion, precision, generatedby, authorizedby) => (
    <ExpansionPanelDetails style={{ flexDirection: 'row', display: 'flex', height: 80, padding: 10 }}>
        <form className={""} noValidate autoComplete="off" >
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Diffusion"
                value={diffusion}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Précision"
                value={precision}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Généré par"
                value={generatedby}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            <TextField
                style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                id="outlined-dense"
                label="Authorisé par"
                value={authorizedby}
                //   className={classes.textField}
                margin="dense"
                variant="outlined"
                helperText=""
            />
            {/* <ChipInput
              value={this.state.diffusionList}
              onRequestAdd={(chip) => this.handleAddChip(chip)}
              onRequestDelete={(chip, index) => this.handleDeleteChip(chip, index)}
            /> */}
        </form>
    </ExpansionPanelDetails>
)
