// ------------------------------------
// Settings for text content language
// ------------------------------------

export const lang = [
    // FR -----------
    {
        title: "Monitoring du Centre d'Education à l'Environnement - FM6E",

        indicatorsNames: [
            "Energies",
            "Eaux",
            "Déchets",
            "Recyclage",
            "Transport",
            "Qualité d'Air",
            "GES",
            "Faune",
            "Flore",
        ],

        Meteo: {
            lebel_1: "Courant",
            lebel_2: "Max",
            lebel_3: "Min",
            lebel_4: "Humid",
            lebel_5: "Vent",
        },

        AppBar: {
            Menu: [
                { label: "Accueil" },
                { label: "Indicateurs" },
                { label: "Ressources" },
            ]
        },

        Control: {
            label: "Période d'activité",
        },

        SideBar: {
            title: "Performances environnementales",
            desc: "Les performances environnementales des sept jours derniers",
            indic_1: {
                title: "Eau potable:",
                unit: " m3"
            },
            indic_2: {
                title: "Eau recyclée :",
                unit: " m3"
            },
            indic_3: {
                title: "Energie du réseau:",
                unit: " KWh"
            },
            indic_4: {
                title: "Energie PV :",
                unit: " KWh"
            },
            indic_5: {
                title: "Déchets :",
                unit: " Kg"
            },
            indic_6: {
                title: "Déchets recyclés :",
                unit: " Kg"
            },
            indic_7: {
                title: "GES",
                unit: " ppm"
            },
            indic_8: {
                title: "Transport",
                unit: " ppm"
            },
        },

        Energy: {
            name: "Energies",
            title: "Indicateurs des énergies",
            desc: "Les indicateurs des énergies renseignent sur la quantité d'énergie consommée par les équipements du CEE. Ils indiquent aussi la quantité d'énergie renouvelable produite par la ferme solaire du CEE",
            indic_1: {
                title: "Energie globale consommée (kWh)",
                unit: " kWh"
            },
            indic_2: {
                title: "Energie renouvelable consommée (kWh)",
                unit: " kWh"
            },
            indic_3: {
                title: "Consommation d'énergie par équipements",
                Element_1: {
                    label: "Prises électriques",
                    unit: " %"
                },
                Element_2: {
                    label: "Equipements de confort CVC",
                    unit: " %"
                },
                Element_3: {
                    label: "Eclairage",
                    unit: " %"
                },
            },
            indic_4: {
                title: "Performance",
                desc: "Energie consomée Conventionnelle VS. Renouvelable",
                Element_1: {
                    label: "Energie Renouvelable",
                    unit: " %"
                },
                Element_2: {
                    label: "Energie Conventionnelle",
                    unit: " %"
                },
            },
        },

        Water: {
            name: "Eaux",
            title: "Indicateurs des eaux",
            desc: "Cet indicateur affiche la quantité d'eau potable consommée dans le CEE ainsi que la quantité d'eau recyclée par la station de traitement des eaux usées et récupérées",
            indic_1: {
                title: "Eau potable consommée (m3)",
                unit: " m3"
            },
            indic_2: {
                title: "Performance",
                desc: "Eaux consomées VS. Eaux recyclées",
                Element_1: {
                    label: "Eaux consommées",
                    unit: " %"
                },
                Element_2: {
                    label: "Eaux recyclées",
                    unit: " %"
                },
            },
            indic_3: {
                title: "Eau recyclée (m3)",
                unit: " m3"

            },

            indic_4: {
                title: "Qualité d’eau en provenance de la STEP",
                comment: "Non potable mais bonne pour l’arrosage"

            },

            indic_5: {
                title: "Qualité d’eau en provenance du réseau national",
                comment: "Potable, très bonne pour la consommation quotidienne"

            },
        },

        Waste: {
            name: "Déchets",
            title: "Indicateurs des déchets",
            desc: "La poubelle du CEE permet le tri des déchets selon leurs catégories. Ce tri aide à la collecte des différentes informations ci-dessous",
            indic_1: {
                title: "Recyclage",
                desc: "Poids des déchets recyclables (Kg)",
                list: ['Verre', 'Metal', 'Plastique'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Poids des déchets compostables (Kg)",
                list: ['Organique', ' Papier'],
                unit: " Kg"
            },
            indic_3: {
                title: "Niveau total",
                unit: " m3"
            },
            indic_4: {
                title: "Niveau total",
                unit: " m3"
            },
            indic_5: {
                title: "Poids total",
                unit: " Kg"
            },
            indic_6: {
                desc: "Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage",
            },
        },


        recyclable: {
            name: "Recyclage",
            title: "Indicateur de recyclage des déchets",
            desc: "Les déchets organiques sont transformés en composites tandis que le reste des déchets sont confiés aux filiales de recyclage",
            indic_1: {
                title: "Recyclage",
                desc: "Déchets recyclés (Kg)",
                list: ['Verre', 'Metal', 'Plastique'],
                unit: " Kg"
            },
            indic_2: {
                title: "Compostage",
                desc: "Déchets transformés en composte (Kg)",
                list: ['Organique', 'Papier'],
                unit: " Kg"
            },
            indic_3: {
                title: "Verre",
                unit: " %"
            },
            indic_4: {
                title: "Métal",
                unit: " %"
            },
            indic_5: {
                title: "Plastique",
                unit: " %"
            },
            indic_6: {
                title: "Organique",
                unit: " %"
            },
            indic_7: {
                title: "Papier",
                unit: " %"
            },
        },


        Transport: {
            name: "Transport",
            title: "Indicateur de transport",
            desc: "Cet indicateur a pour objectif de définir le degré de la contribution des moyens de transport dans la pollution de l'air",
            indic_1: {
                title: "Bilan carbone du transport",
                desc: "Bilan carbone du transport (Kg équi. CO2)",
                list: ['Voiture', 'Train', 'tramway', 'Bus urbain', 'Deux roues'],
                unit: " Kg"
            },
        },

        Air: {
            name: "Air",
            title: "Indicateur de la Qualité d'air",
            desc: "L'indicateur de la qualité d'air affiche les différentes valeurs mesurées et instantanées de la température, de l'humidité et de la quantité des particules CO2 dans l'air",
            indic_1: {
                title: "Hall d'accueil",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_2: {
                title: "Espace bureaux",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_3: {
                title: "Classe verte",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
            indic_4: {
                title: "Salle plénière",
                Element_1: {
                    label: "Température",
                    unit: " °C"
                },
                Element_2: {
                    label: "Humidité",
                    unit: " %"
                },
                Element_3: {
                    label: "Particule CO2",
                    unit: " %"
                },
            },
        },

        GES: {
            name: "GES",
            title: "Radar des performances",
            desc: "Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement",
            indic_1: {
                title: "Radar des performances",
                Element_1: {
                    label: "Déchets",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "Eau",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "Energie",
                    unit: " KgCO2"
                },
                Element_4: {
                    label: "Transport",
                    unit: " KgCO2"
                },
                Element_5: {
                    label: "Autres",
                    unit: " KgCO2"
                },
            },
            indic_2: {
                title: "Le jardin botanique du CEE",
            },
            indic_3: {
                title: "Comment lire le radar ?",
                desc: "Le centre du graphe du Radar renvoi vers la valeur minimale 0. Plus les zones sont de couleur verte, plus les émissions du CO2 sont basses, plus elles sont blanches plus les émissions en CO2 sont élevées"
            },
            indic_4: {
                title: "Le jardin botanique du Centre de l’éducation à l’environnement contient différentes espèces végétales identifiées en collection. Ce jardin a pour mission principale la conservation de la biodiversité, notamment des espèces locales, l'amélioration de la qualité de l'air en absorbant les GES, ainsi qu'une mission d'information et de sensibilisation à la protection de l'environnement du public",
            },
        },

        Faune: {
            name: "Faune",
            title: "Indicateur de la Faune",
            desc: "L’environnement naturel du CEE abrite plusieurs espèces animales existantes dans la région. Ci-dessous quelques informations et statistiques des espèces animales et leurs statuts de conservation",
            indic_1: "Espèces à préoccupation mineur",
            indic_2: "Espèces en vulnérabilité",
            indic_3: "Espèces menacés d'extinction",
            state_0: 'Préoccupation mineur',
            state_1: 'Vulnérable',
            state_2: 'En danger',
        },

        Flore: {
            name: "Flore",
            title: "Indicateur de la Flore",
            desc: "Le CEE a adopté une démarche écologique afin de protéger les espèces végétales locales. Ci-dessous quelques statistiques des espèces végétales au niveau du CEE et leurs statuts de conservation",
            indic_1: "Espèces à préoccupation mineur",
            indic_2: "Espèces en vulnérabilité",
            indic_3: "Espèces menacés d'extinction",
            state_0: 'Préoccupation mineur',
            state_1: 'Vulnérable',
            state_2: 'En danger',
        },

        Ressources: [
            {
                id: 1,
                label: "Aire de stationnement & Transport",
                desc: "L'aire de stationnement du Centre d'éducation à l'environnement est aménagée en espace vert, doté d’équipements modernes: bornes de recharge pour véhicules électriques, application dédiée, calcul et compensation volontaire du bilan carbone … Un parking au sol perméable à l’eau, des matériaux recyclables, de la verdure et des zones de stationnement ombragées pour un accueil agréable de nos visiteurs. Calcul de votre bilan CO2: La compensation volontaire carbone est un moyen de participation à l’effort collectif de lutte contre la pollution atmosphérique et le changement climatique. Vous pouvez compensez votre bilan carbone, via  le lien suivant :  http://calculateurco2.org/",
                picture: "/images/home/home2.png",
            },
            {
                id: 2,
                label: "Bâtiment - NB : source du contenu : l’application bâtiment des outils pédagogiques",
                desc: "Le CEE est un modèle et exemple concrets de projets innovants favorisant le déploiement d’une nouvelle démarche d’éco-construction sur l’ensemble du territoire national. Le bâtiment du CEE est une structure écologique innovante, qui répond à des exigences environnementales. En plus de son infrastructure et ses équipements ultra-modernes, il est équipé d'un réseau électrique et informatique de commande et de monitoring intelligent des ressources. Le concept architectural du bâtiment propose une grande transparence avec des baies vitrées favorisant l’éclairement naturel, protégées par une végétation extérieure qui participe à la régulation thermique, selon les exigences des études thermodynamiques, des volumes modulables, des hauteurs optimisées pour le confort thermique et la qualité de l’air ainsi qu’une fluidité des circuits d’accès. Tout en assurant modernisme, esthétisme et écologie, des savoir-faire ancestraux ont été mobilisés et des matériaux de construction et d’isolement naturels utilisés, comme la terre crue et le bois privilégiés pour leurs qualités environnementales, techniques et plastiques",
                picture: "/images/home/home2.png",
            },
            {
                id: 3,
                label: "Station de traitement des eaux",
                desc: "L’EAU, une ressource naturelle, une denrée vitale et précieuse qui se fait de plus en plus rare à l’état pure. Sa gestion exige un soin particulier, des plus rigoureux, et son économie et son traitement systématique deviennent une urgence absolue. Afin d’intégrer cette exigence, le CEE s’est équipé d’une station d’épuration des eaux usées. Grâce à un procédé naturel, la station permet de fournir une eau propre à l’arrosage pour les espaces verts du CEE. A l’eau traitée vient s’ajouter l'eau de pluie collectée (par infiltration dans les sols et par ruissellement) ce qui permet de fournir la totalité des besoins en eau d’arrosage des espaces verts et permet ainsi de limiter la consommation d’eau potable au strict nécessaire",
                picture: "/images/home/home2.png",
            },
            {
                id: 4,
                label: "Eolienne Agricole",
                desc: "Afin de consolider sa démarche éco-responsable par la réduction des émissions de gaz à effet de serre, le Centre d'Education à l'Environnement promeut la diversification des sources d’énergie renouvelable par le recours au mix énergétique. Dans un but pédagogique et pour la démonstration, le CEE s’est équipé d’une éolienne agricole, adossée à une application ; un outil pédagogique qui permet d’expliquer d’une manière ludique le principe de fonctionnement, ainsi que la contribution de l’énergie éolienne à la réduction des émissions GES",
                picture: "/images/home/home2.png",
            },
            {
                id: 5,
                label: "Espaces verts et Biodiversité ",
                desc: "Le CEE dispose d’espaces verts conçues sur le relief initial du site, favorisant ainsi l’installation et la préservation d’une biodiversité locale riche, variée et équilibrée. Ces espaces verts se caractérisent par un aménagement durable: Des espaces aménagés de manière à préserver leur aspect naturel et les caractéristiques initiales du site: sol, relief, espèces végétales, … ; Des prairies fleuries, riches, variées et équilibrées ; Des jardins pédagogiques illustrant la diversité biologique, notamment les espèces locales ; Un sol respectueux de l’environnement et fertilisé au composte produit in-situ ; Une faible consommation en eau : économie d’eau et arrosage par eau récupérée et recyclée ;\nLes espaces verts du CEE contribuent positivement à la performance environnementale du CEE",
                picture: "/images/home/home2.png",
            },
            {
                id: 6,
                label: "Energie photovoltaïque",
                desc: "Le Centre d'Education à l'Environnement a opté pour un mix énergétique afin de promouvoir les énergies propres, atteindre son objectif en terme de performance environnementale.\nAinsi la ferme solaire (Aire Photovoltaïque) du CEE permet de subvenir à une majeure partie des besoins énergétique du Centre, tout en réduisant d’autant son bilan carbone. L’Aire photovoltaïque est la parfaite illustration de la mission et du propos pédagogique du CEE puisqu’il permet l’accès à de nombreuses informations utiles dans les conditions réelles d’utilisation.\nVoir aussi l’application dédiée au point d’intérêt Aire Photovoltaïque",
                picture: "/images/home/home2.png",
            },
            {
                id: 7,
                label: "Gestion des déchets",
                desc: "Afin de minimiser son empreinte écologique, le CEE a intégré des mesures préventives par une gestion rigoureuse de ses déchets, visant à réduire leurs effets nocifs sur la santé humaine et environnementale ainsi que sur le cadre de vie. Le CEE a adopté la démarche éco-responsable 4R-V pour la gestion de ses déchets: Repenser, Réduire, Réutiliser, Recycler, Valoriser.\n    Ainsi une démarche de réduction à la source, de tri sélectif des déchets de réemploi et de recyclage est mise en place.\nLes déchets sont ainsi triés par types: carton/papier, métal, plastique et déchets organiques.\nN.B. Les déchets dangereux comme les ampoules, les accumulateurs ou batteries sont séparés des autres déchets recyclables. Les déchets organiques (DO) quant à eux sont transformés en composte au sein même du CEE pour une utilisation dans le jardin botanique. Voir tout le processus en détail via l’application dédiée",
                picture: "/images/home/home2.png",
            },

        ],

        welcome: [
            {
                id: 1,
                title: "Inauguration du Centre d'Education à l'Environnement",
                desc: "L’inauguration du centre d’éducation à l’environnement aura lieu le 01 Mars 2019 à partir de 15h00 sur les lieux par son altesse royale la princesse Lalla Hasnae",
                picture: "/images/home/home1.png",
            },
            {
                id: 2,
                title: "Centre d'Education à l'Environnement",
                desc: "Le centre d'éducation à l’environnement propose un ensemble d’activités dans le cadre de la protection de l’environnement. Ces activités seront organisées sous  forme des formations, de visites pédagogiques, des événements et conférences ...Le Centre présente aux gens un nouveau modèle de la construction durable d’un bâtiment écologique",
                picture: "/images/home/home2.png",
            },
            {
                id: 3,
                title: "Système de Monitoring",
                desc: "Le système de monitoring intelligent du centre d’éducation à l’environnement permet d’évaluer l’ensemble des indicateurs environnementaux liés aux ressources du centre par des valeurs et des graphiques.  Selon les résultats affichés, une ou plusieurs actions pourront s’effectuer pour réduire les activités inappropriées à l’environnement",
                picture: "/images/home/home3.png",
            },
        ],

    },


    // AR -----------

    {
        title: "تتبع ومراقبة المركز التربوي للبيئة – مؤسسة محمد السادس للبيئة",

        indicatorsNames: [
            "الطاقات",
            "المياه",
            "النفايات",
            "التدوير",
            "النقل",
            "جودة الهواء",
            " الغازات",
            "الحياة البرية",
            "النباتات",
        ],

        Meteo: {
            lebel_1: "الحالية",
            lebel_2: "العليا",
            lebel_3: "الدنيا",
            lebel_4: "الرطوبة",
            lebel_5: "الرياح",
        },

        AppBar: {
            Menu: [
                { label: "الرئيسية" },
                { label: "المؤشرات" },
                { label: "الموارد" },
            ]
        },

        Control: {
            label: "فترة النشاط",
        },

        SideBar: {
            title: "الأداء البيئي",
            desc: "نظرة عامة على الأداء البيئي للأيام السبعة الماضية",
            indic_1: {
                title: "الماء",
                unit: " m3"
            },
            indic_2: {
                title: "الماء المعالج",
                unit: " m3"
            },
            indic_3: {
                title: "الطاقة :",
                unit: " KWh"
            },
            indic_4: {
                title: "الطاقة الشمسية",
                unit: " KWh"
            },
            indic_5: {
                title: "النفايات",
                unit: " Kg"
            },
            indic_6: {
                title: "النفايات المدورة",
                unit: " Kg"
            },
            indic_7: {
                title: "غازات دفيئة",
                unit: " ppm"
            },
            indic_8: {
                title: "النقل",
                unit: " ppm"
            },
        },

        Energy: {
            name: "الطاقات",
            title: "مؤشرات الطاقات",
            desc: "توفر مؤشرات الطاقات معلومات عن كمية الطاقة المستهلكة من معدات المركز. كما أنها تشير إلى كمية الطاقة المتجددة التي تنتجها المزرعة الشمسية للمركز",
            indic_1: {
                title: "مجموع الطاقة المستهلكة (كيلووات ساعة)",
                unit: " kWh"
            },
            indic_2: {
                title: "مجموع الطاقة المتجددة المستهلكة (كيلوواط ساعة)",
                unit: " kWh"
            },
            indic_3: {
                title: "استهلاك الطاقة من الأجهزة",
                Element_1: {
                    label: "المقابس الكهربائية",
                    unit: " %"
                },
                Element_2: {
                    label: "معدات ونظام التدفئة، والتهوية، وتكييف الهواء",
                    unit: " %"
                },
                Element_3: {
                    label: "الإضاءة",
                    unit: " %"
                },
            },
            indic_4: {
                title: "الأداء",
                desc: "طاقة شبكة التوزيع المستهلكة ضد. الطاقة المتجددة المستهلكة",
                Element_1: {
                    label: "الطاقة المتجددة",
                    unit: " %"
                },
                Element_2: {
                    label: "طاقة شبكة التوزيع",
                    unit: " %"
                },
            },
        },

        Water: {
            name: "المياه",
            title: "مؤشرات المياه",
            desc: "يبين هذا المؤشر كمية المياه الصالحة للشرب المستهلكة بالمركز، وكذلك كمية المياه التي تم تدويرها في محطة معالجة المياه العادمة والمتجمعة",
            indic_1: {
                title: "كمية الماء الصالح للشرب المستهلكة (متر مكعب)",
                unit: " m3"
            },
            indic_2: {
                title: "الأداء",
                desc: "الماء المستهلك ضد. الماء المعالج",
                Element_1: {
                    label: "الماء المستهلك",
                    unit: " %"
                },
                Element_2: {
                    label: "الماء المعالج",
                    unit: " %"
                },
            },
            indic_3: {
                title: "الماء المعالج (متر مكعب)",
                unit: " m3"

            },

            indic_4: {
                title: "جودة مياه القادمة من محطة معالجة المياه",
                comment: "غير صالحة للشرب لكنها جيدة للسقي"
            },

            indic_5: {
                title: "جودة مياه القادمة من شبكة التوزيع الوطنية",
                comment: "صالحة للشرب، جيدة جدا للإستهلاك اليومي"
            },
        },

        Waste: {
            name: "النفايات",
            title: "مؤشرات النفايات",
            desc: "تمكن الحاوية من فرز نفايات المركز حسب فئاتها ونوعها. يساعد هذا الفرز على جمع المعلومات المختلفة أدناه",
            indic_1: {
                title: "القابلة لإعادة للتدوير",
                desc: "وزن النفايات القابلة لإعادة التدوير (بالكيلوغرام)",
                list: ['الزجاج', 'الحديد', 'البلاستيك'],
                unit: " Kg"
            },
            indic_2: {
                title: "السماد",
                desc: "وزن النفايات القابلة للتسميد (بالكيلوغرام)",
                list: ['العضوية', 'الورق'],
                unit: " Kg"
            },
            indic_3: {
                title: "المستوى الكلي",
                unit: " m3"
            },
            indic_4: {
                title: "المستوى الكلي",
                unit: " m3"
            },
            indic_5: {
                title: "الوزن الإجمالي",
                unit: " Kg"
            },
            indic_6: {
                desc: "يتم تحويل النفايات العضوية إلى سماد طبيعي، بينما يتم إرسال باقي النفايات الى الشركات والمختصين لإعادة تدويرها",
            },
        },


        recyclable: {
            name: "التدوير",
            title: "مؤشر إعادة تدوير النفايات",
            desc: "يتم تحويل النفايات العضوية إلى سماد طبيعي، بينما يتم إرسال باقي النفايات الى الشركات والمختصين لإعادة تدويرها",
            indic_1: {
                title: "تم إعادة التدوير",
                desc: "النفايات المعاد تدويرها (بالكيلوغرام",
                list: ['الزجاج', 'الحديد', 'البلاستيك'],
                unit: " Kg"
            },
            indic_2: {
                title: "السماد",
                desc: "وزن النفايات المحولة للسماد (بالكيلوغرام)",
                list: ['العضوية', 'الورق'],
                unit: " Kg"
            },
            indic_3: {
                title: "الزجاج",
                unit: " %"
            },
            indic_4: {
                title: "الحديد",
                unit: " %"
            },
            indic_5: {
                title: "البلاستيك",
                unit: " %"
            },
            indic_6: {
                title: "العضوية",
                unit: " %"
            },
            indic_7: {
                title: "الورق",
                unit: " %"
            },
        },


        Transport: {
            name: "النقل",
            title: "مؤشر النقل ",
            desc: "يهدف هذا المؤشر إلى تحديد نسبة مساهمة وسائل النقل في تلوث الهواء",
            indic_1: {
                title: "حصيلة البصمة الكربونية للنقل",
                desc: "حصيلة البصمة الكربونية للنقل (الكيلوغرام المعادل للكربون",
                list: ['السيارة', 'القطار', 'الترامواي', 'الحافلة الحضرية', 'الدراجة النارية'],
                unit: " Kg"
            },
        },

        Air: {
            name: "الهواء",
            title: "مؤشر جودة الهواء",
            desc: "يمكن مؤشر جودة الهواء من معرفة مختلف القياسات اللحظية لدرجة الحرارة، الرطوبة وكمية جزيئات الكربون في الهواء",
            indic_1: {
                title: "بهو الإستقبال",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "الغازات الدفيئة",
                    unit: " %"
                },
            },
            indic_2: {
                title: "فضاء المكاتب",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
            indic_3: {
                title: "القسم الأخضر",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
            indic_4: {
                title: "قاعة العروض",
                Element_1: {
                    label: "الحرارة",
                    unit: " °C"
                },
                Element_2: {
                    label: "الرطوبة",
                    unit: " %"
                },
                Element_3: {
                    label: "جزيئات الكربون",
                    unit: " %"
                },
            },
        },

        GES: {
            name: "الانبعاثات",
            title: "مخطط رادار الأداء",
            desc: "يقدم رادار الأداء رؤية عامة لحصيلة البصمة الكربونية لمختلف أنشطة مركز التربية البيئية",
            indic_1: {
                title: "ردار الأداء",
                Element_1: {
                    label: "النفايات",
                    unit: " KgCO2"
                },
                Element_2: {
                    label: "الماء",
                    unit: " KgCO2"
                },
                Element_3: {
                    label: "الطاقة",
                    unit: " KgCO2"
                },
                Element_4: {
                    label: "النقل",
                    unit: " KgCO2"
                },
                Element_5: {
                    label: "أخرى",
                    unit: " KgCO2"
                },
            },
            indic_2: {
                title: "الحديقة النباتية لمركز التربية البيئية",
            },
            indic_3: {
                title: "كيف نقرأ الرادار ؟",
                desc: "مركز رادار الأداء يعادل القيمة الدنيا 0. كلما قلت انبعاثات الكربون، كلما كانت زواياه بلون أخضر. كلما ازدادت انبعاثات الكربون، كلما كانت بلون أبيض"
            },
            indic_4: {
                title: "تحتوي الحديقة النباتية التابعة لمركز التربية البيئية على أنواع نباتية مختلفة مرتبة في مجموعات. وتتمثل المهمة الرئيسية لهذه الحديقة في الحفاظ على التنوع البيولوجي، بما في ذلك للأنواع المحلية، وتحسين نوعية الهواء عن طريق امتصاص الغازات الدفيئة، وكذلك توفير المعلومات والرفع من الوعي لحماية البيئة",
            },
        },

        Faune: {
            name: "الحيوانات",
            title: "مؤشر التنوع البيولوجي - الحياة البرية",
            desc: "تعد البيئة الطبيعية لمركز التربية البيئية موطنا لعدة أنواع من الحيوانات الموجودة في المنطقة. فيما يلي بعض المعلومات والإحصائيات عن الأنواع الحيوانية وحالة حفظها",
            indic_1: "أنواع غير مهددة بالإنقراض",
            indic_2: "أنواع مهددة بالإنقراض",
            indic_3: "أنواع معرضة للخطر للغاية",
            state_0: 'غير مهدد بالإنقراض',
            state_1: 'مهدد بالإنقراض',
            state_2: 'معرض للخطر للغاية',
        },

        Flore: {
            name: "النباتات",
            title: "مؤشر التنوع البيولوجي – النباتات",
            desc: "ينهج مركز التربية البيئية استراتيجية بيئية لحماية الأنواع النباتية الموجودة في المنطقة. فيما يلي بعض الإحصاءات عن الأنواع النباتية في المركز وحالة حفظها",
            indic_1: "أنواع غير مهددة بالإنقراض",
            indic_2: "أنواع مهددة بالإنقراض",
            indic_3: "أنواع معرضة للخطر للغاية",
            state_0: 'غير مهدد بالإنقراض',
            state_1: 'مهدد بالإنقراض',
            state_2: 'معرض للخطر للغاية',
        },

        Ressources: [
            {
                label: "منطقة وقوف السيارات ووسائل",
                desc: "هيئت منطقة وقوف السيارات في مركز التربية البيئية على شكل فضاءات خضراء مجهزة بمعدات حديثة: محطات شحن السيارات الكهربائية، التطبيقات المرافقة، الحساب والتعويض التطوعي للبصمة الكربونية ... جهز موقف السيارات بقاعدة تتيح تسرب المياه، وبمواد قابلة لإعادة التدوير، مساحات خضراء ومناطق وقوف مظللة من أجل استقبال رائع لزوارنا. حساب البصمة الكربونية: التعويض التطوعي للكربون وسيلة للمشاركة في الجهود الجماعية لمكافحة تلوث الهواء وتغير المناخ. يمكنكم تعويض البصمة الكربونية الخاصة بكم عبر الرابط التالي: http://calculateurco2.org/",
                picture: "/images/home/transport.png",
            },
            {
                label: "المبنى -  ملاحظة: مصدر المحتوى: تطبيق 'المبنى' للوسائل البيداغوجية",
                desc: "يعتبر مركز التربية البيئية نموذجًا ومثالا حقيقيين للمشاريع المبتكرة التي تشجع على اعتماد منهجية جديدة في البناء الإيكولوجي على المستوى الوطني. يعتبر مبنى مركز التربية البيئية منشأة إيكولوجية إبداعية، يحترم مجموعة من المعايير البيئية، بالإضافة الى بنيته التحتية ومعداته الحديثة، مجهز بشبكتين كهربائية ومعلوماتية متطورتين للتحكم والمراقبة الذكية لمختلف الموارد. يوفر الشكل الهندسي المعماري لمبنى المركز شفافية كبيرة، وذلك بفضل النوافذ الزجاجية التي تشجع الإضاءة الطبيعية، المحمية بنباتات خضراء خارجية والتي تساهم في تعديل الحرارة، حسب متطلبات دراسات الديناميكا الحرارية، أحجام على شكل وحدات وارتفاعات مثالية لضمان الارتياح الحراري للإنسان وجودة الهواء، ومرونة منافذ الدخول والخروج. مواد البناء والعوازل: ضمانا للحداثة، الجمالية والإيكولوجية، تم تسخير المهارات الحرفية العتيقة للأسلاف، ومواد بناء وعزل طبيعية مستعملة، مثل التربة الخام والخشب الممتاز لميزاتهم البيئية، التقنية والبلاستيكية",
                picture: "/images/home/batiment.png",
            },
            {
                label: "محطة معالجة المياه",
                desc: "المياه، مورد طبيعي، مادة حيوية، ثمينة وأكثر ندرة في حالتها النقية. يحتم تدبيرها اليوم رعاية خاصة، وأكثر صرامة، إذ أن توفيرها ومعالجتها بشكل منهجي أمر مستعجل. ومن أجل إدماج هذ ه الضرورة، جهز مركز التربية البيئية بمحطة لمعالجة المياه العادمة، بطريقة طبيعية، تمكن المحطة من توفير مياه ري المساحات الخضراء بمركز التربية البيئية. تضاف المياه المعالجة إلى مياه الأمطار التي يتم تجميعها (عن طريق الترشيح في التربة وعبر الجريان السطحي) مما يسمح بتوفير جميع احتياجات مياه الري للمساحات الخضراء، وبالتالي الحد من استهلاك المياه الصالحة للشرب إلا للضروريات الملحة فقط",
                picture: "/images/home/eau.png",
            },
            {
                label: "الطاحونة الهوائية الزراعية",
                desc: "لترسيخ المنهجية الايكولوجية المسؤولة عن التقليل من انبعاثات غازات الاحتباس الحراري، يشجع مركز التربية البيئية تنوع المصادر الطاقية المتجددة عن طريق استخدام مزيج الطاقة. ولأغراض بيداغوجية وتوضيحية، جهز مركز التربية البيئية بطاحونة هوائية زراعية معززة بتطبيق؛ إنها أداة بيداغوجية تمكن من الشرح بطريقة ممتعة مبدأ التشغيل، وكذلك مساهمة الطاقة الريحية في الحد من انبعاثات الغازات الدفيئة",
                picture: "/images/home/batiment.png",
            },
            {
                label: "المساحات الخضراء والتنوع البيولوجي",
                desc: "يحتوي مركز التربية البيئية على مساحات خضراء مصممة على مرتفع الموقع، مما يؤهله لتبيت والحفاظ على التنوع البيولوجي المحلي الغني والمتنوع والمتوازن. تتميز هذه المساحات الخضراء بالتنمية المستدامة: هيئت الفضاءات الخضراء بطريقة طبيعية مع الحفاظ على الخصائص الأولية للموقع: التربة، المرتفعات، والأنواع النباتية...؛ المروج المزهرة، الغنية، المتنوعة والمتوازنة؛ الحدائق البيداغوجية ذات التنوع البيولوجي خاصة الأنواع المحلية؛ التربة المحترمة للبيئة التي يتم تسميدها بالسماد المنتج محليًا؛ البصمة المنخفضة للماء: توفير المياه، والسقي بالمياه التي يتم إعادة تدويرها... تساهم المساحات الخضراء بشكل إيجابي في الأداء البيئي لمركز التربية البيئية",
                picture: "/images/home/biodiversite.png",
            },
            {
                label: "Energie photovoltaïque",
                desc: "اعتمد مركز التربية البيئية المزيج الطاقي لتعزيز الطاقات النظيفة، وتحقيق هدفه من حيث الأداء البيئي. وهكذا تمكن منطقة الطاقة الشمسية (المنطقة الضوئية) التابعة لمركز التربية البيئية من تلبية جزءً كبيرً من احتياجات الطاقة في المركز، مع الحد من انبعاثات الكربون. تعد منطقة الألواح الشمسية تجسيدا مثالياً لمهمة المركز والهدف التربوي لإنشائه، لأنها تتيح الوصول إلى الكثير من المعلومات المفيدة في ظروف الاستخدام الفعلية. يمكنكم زيارة أيضا التطبيق المخصص لمنطقة الألواح الضوئية",
                picture: "/images/home/photovoltaique.png",
            },
            {
                label: "تدبير النفايات",
                desc: "من أجل تقليل أثرها البيئي، تبنى مركز التربية البيئية إجراءات وقائية من خلال التدبير الصارم للنفايات، بهدف الحد من آثارها الضارة على الصحة البشرية والبيئة، وكذلك على إطار الحياة العامة. اعتمد مركز التربية البيئية مبدأ 4R-V لتدبير النفايات: إعادة التفكير؛ التقليص من النفايات؛ إعادة الاستخدام؛ إعادة التدوير؛ تثمين النفايات.  وهكذا تم وضع منهجية للحد من مصادر النفايات، للفرز الانتقائي لها، إعادة استخدامها وتدويرها. تفرز النفايات حسب نوعها: الورق المقوى/الورق، المعدن، البلاستيك والنفايات العضوية. ملاحظة: يتم فصل النفايات الخطرة مثل المصابيح والبطاريات عن النفايات الأخرى القابلة لإعادة التدوير. يتم تحويل النفايات العضوية (ن.ع) إلى سماد طبيعي داخل مركز التربية البيئية لاستخدامها في الحديقة النباتية. تعرف على عملية التسميد بالتفصيل عبر التطبيق المخصص لتدبير النفايات",
                picture: "/images/home/dechets.png",
            },
        ],

        welcome: [
            {
                id: 1,
                title: "افتتاح وتدشين مركز التربية البيئية",
                desc: "يقام حفل تدشين وافتتاح مركز التربية البيئية يوم الجمعة 1 مارس 2019 على الساعة 15:00 مساءً في المركز من طرف صاحب السمو الملكي الأميرة للا حسناء",
                picture: "/images/home/home1.png",
            },
            {
                id: 2,
                title: "مركز التربية البيئية",
                desc: "يقدم مركز التربية البيئية مجموعة من الأنشطة في إطار حماية البيئة. وتنظم هذه الأنشطة على شكل دورات تدريبية وزيارات تعليمية بيداغوجية، فعاليات ومؤتمرات ... يقدم المركز لعموم الناس نموذج جديد للبناء المستدام لمبنى إيكولوجي",
                picture: "/images/home/home2.png",
            },
            {
                id: 3,
                title: "آلية التتبع و المراقبة",
                desc: "يسمح نظام المراقبة الذكي لمركز التربية البيئية بتقييم مختلف المؤشرات البيئية المرتبطة بموارد المركز عبر عدة مخططات. كما يمكن هذا التقييم من اتخاذ إجراءات مناسبة للحد من الأنشطة المضرة بالبيئة",
                picture: "/images/home/home3.png",
            },
        ],
    },
]
