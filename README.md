# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


const handleGetdada = ()=>{
  //   axios.get('http://localhost:3000/energy-data',{id}).then(({end_year,
  //   intensity,
  //   sector,
  //   topic,
  //   insight,
  //   url,
  //   region,
  //   impact,
  //   added,
  //   published,
  //   country,
  //   relevance,
  //   pestle,
  //   source,
  //   title,
  //   likelihood}) =>{
      // setEnd_year(end_year)
      // setIntensity(intensity)
      // setSector(sector)
      // setTopic(topic)
      // setInsight(insight)
      // setUrl(url)
      // setRegion(region)
      // setImpact(impact)
      // setAdded(added)
      // setPublished(published)
      // setCountry(country)
      // setRelevance(relevance)
      // setPestle(pestle)
      // setSource(source)
      // setTitle(title)
      // setLikelihood(likelihood)
  //    console.log(end_year,
  //     intensity,
  //     sector,
  //     topic,
  //     insight,
  //     url,
  //     region,
  //     impact,
  //     added,
  //     published,
  //     country,
  //     relevance,
  //     pestle,
  //     source,
  //     title,
  //     likelihood)
  // })


// app.post("/energy-data", async (req, res) => {
//     const {
//       end_year,
//       intensity,
//       sector,
//       topic,
//       insight,
//       url,
//       region,
//       impact,
//       added,
//       published,
//       country,
//       relevance,
//       pestle,
//       source,
//       title,
//       likelihood,
//     } = req.body;
  
//     // Basic validation (expand as needed)
  
//     try {
//       // Check if the entry already exists
//       const existingData = await EnergyModel.findOne({
//         end_year,
//         intensity,
//         sector,
//         topic,
//         insight,
//         url,
//         region,
//         impact,
//         added,
//         published,
//         country,
//         relevance,
//         pestle,
//         source,
//         title,
//         likelihood,
//       });
  
//       if (existingData) {
//         return res.status(409).json({ message: "Data already exists" });
//       }
  
//       // Create the new data entry
//       const newData = await EnergyModel.create({
//         end_year,
//         intensity,
//         sector,
//         topic,
//         insight,
//         url,
//         region,
//         impact,
//         added,
//         published,
//         country,
//         relevance,
//         pestle,
//         source,
//         title,
//         likelihood,
//       });
  
//       return res.status(201).json({ message: "Data created successfully", data: newData });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "An error occurred while creating the data" });
//     }
//   });
  

// app.get("/energy-data", async(req, res) => {
//     const {end_year,
//         intensity,
//         sector,
//         topic,
//         insight,
//         url,
//         region,
//         impact,
//         added,
//         published,
//         country,
//         relevance,
//         pestle,
//         source,
//         title,
//         likelihood} = req.body;
//   const Data = await EnergyModel.find({
//     end_year,
//     intensity,
//     sector,
//     topic,
//     insight,
//     url,
//     region,
//     impact,
//     added,
//     published,
//     country,
//     relevance,
//     pestle,
//     source,
//     title,
//     likelihood,
//   });
//   res.json(Data)
// });




  
  //   const IndustryCriteria = (data) => data.includes("Industries");
  //   const EnvironmentalCriteria = (data) => data.includes("Environmental");
  //   const EconomicCriteria = (data) => data.includes("Economic");
  //   const PoliticalCriteria = (data) => data.includes("Political");
  //   const TechnologicalCriteria = (data) => data.includes("Technological");
  //   const OrganizationCriteria = (data) => data.includes("Organization");
  //    const HealthcareCriteria = (data) => data.includes("Healthcare");
  //     const SocialCriteria = (data) => data.includes("Social");
  //      const LifestylesCriteria = (data) => data.includes("Lifestyles");

 

  //   const EnvironmentalPestle = pestle.filter(EnvironmentalCriteria);
  //    const IndustryPestle = pestle.filter(IndustryCriteria);
  //     const EconomicPestle = pestle.filter(EconomicCriteria);
  //      const PoliticalPestle = pestle.filter(PoliticalCriteria);
  //       const TechnologicalPestle = pestle.filter(TechnologicalCriteria);
  //        const OrganizationPestle = pestle.filter(OrganizationCriteria);
  //         const HealthcarePestle = pestle.filter(HealthcareCriteria);
  //          const SocialPestle = pestle.filter(SocialCriteria);
  //           const LifestylesPestle = pestle.filter(LifestylesCriteria);
  //   console.log(EnvironmentalPestle.length,IndustryPestle.length,EconomicPestle.length,PoliticalPestle.length,TechnologicalPestle.length,OrganizationPestle.length,HealthcarePestle.length,SocialPestle.length,LifestylesPestle.length);
  
  
    // const newArr = []
  // for(let i=0; i<pestle.length; i++ ){
  //   let currentValue = `${pestle[i]}`
  //   if(!newArr.includes(currentValue)) newArr.push(pestle[i])
  // }#   R e a c t - C h a r t J S  
 