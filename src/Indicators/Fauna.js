import React, { Component } from "react";
import Slider from "react-slick";
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Information from '../Charts/Information'

import Biodiv from '../Charts/Biodiv'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

let timer = 0

class Fauna extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            biodiv: [
                ["Faune", "Tortue commune", "uploads\/20180910050355__torture.JPG", "C'est une petite tortue, en moyenne avec une carapace légèrementgibbeux. Cette carapace est lisse brun foncer noirâtre avec des rayures et des taches jaunes. La queue est assez longue.", 1, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Hibou du Cap", "uploads\/20180910050657__Chouette.JPG", "Le Hibou du Cap est une espèce d'oiseaux de la famille des Strigides. Il est sédentaire dans le nord-ouest du paysoù il est rare. Il est en régression marquée depuis la fin du 19èmesiècle, à cause de la destruction et au dérangement de son habitat.", 2, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Chardonneret", "uploads\/20180910050551__Chardonneret.JPG", "Le Chardonneret (Cardueliscarduelis) est une espèce de passereaux de la famille des fringillidés. Cette espèce est partiellement migratrice, elle est petite et très multicolore.", 2, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Abeille", "uploads\/abeille.JPG", "Les abeilles forment un clade d’insectes hyménoptères de la superfamille des apoïdes. Cependant, la majorité des abeilles ne produisent pas de miel, elles se nourrissent du nectar des fleurs. Une abeille peut vivre jusqu'à 10 mois en hiver et 1 mois en été.", 1, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Canard colvert", "uploads\/20180910060234__canard.JPG", "Le Canard colvert (Anas platyrhynchos) est une espèce d'oiseaux de la famille des Ansériformes. C'est l’espèce la plus connue et reconnaissable de tous les canards, du fait de l'existence de races de canards domestiques issues de cette espèce.", 0, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Hérisson du désert", "uploads\/herisson.JPG", "Le hérisson du désert est un animal très actif et solitaire. Il aime pendant la journée se réfugier sous un terrier abandonné. On le trouve souvent dans le désert au Maroc de Laâyoune jusqu’à Figuig.", 1, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Abeille", "uploads\/abeille.JPG", "Les abeilles forment un clade d’insectes hyménoptères de la superfamille des apoïdes. Cependant, la majorité des abeilles ne produisent pas de miel, elles se nourrissent du nectar des fleurs. Une abeille peut vivre jusqu'à 10 mois en hiver et 1 mois en été.", 1, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
                ["Faune", "Canard colvert", "uploads\/20180910060234__canard.JPG", "Le Canard colvert (Anas platyrhynchos) est une espèce d'oiseaux de la famille des Ansériformes. C'est l’espèce la plus connue et reconnaissable de tous les canards, du fait de l'existence de races de canards domestiques issues de cette espèce.", 0, "السلحفاة البرية", "زاحف من ذوات الدم البارد، جسمها محمي بدرقة صلبة، ثمة نوعان من السلاحف الأول بري وبعضها مائي والسلحفاة البحرية تسمى في العربية الفصحى: الأَطُوم، وفي العامية: الترسة البحرية"],
            ],
            biostat: [4, 2, 2]
        }
    }

    getFauna() {
        const url = `${URL}/bio/getFauna.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biodiv) => {
                this.setState({ biodiv })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getStatFauna() {
        const url = `${URL}/bio/getStatFauna.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biostat) => {
                this.setState({ biostat })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        // this.getFauna()
        // this.getStatFauna()
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: Timers.indicItems / 10,
        }
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].Faune.title}
                    description={lang[x].Faune.desc}
                />
                <div style={{ flexDirection: 'row', display: 'flex', padding: 5, marginTop: 5 }} >
                    <Slider {...settings} >
                        {
                            this.state.biodiv.map((x) => {
                                return (
                                    <Biodiv
                                        title={x[1]}
                                        title_ar={x[5]}
                                        image={URL + '/' + x[2]}
                                        text={x[3]}
                                        text_ar={x[6]}
                                        status={x[4]}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_0}
                            content={
                                <Information
                                    info={this.state.biostat[0]}
                                    icon={"/images/indicators/biodiv/good.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_1}
                            content={
                                <Information
                                    info={this.state.biostat[1]}
                                    icon={"/images/indicators/biodiv/bad.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_2}
                            content={
                                <Information
                                    info={this.state.biostat[2]}
                                    icon={"/images/indicators/biodiv/danger.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fauna)
