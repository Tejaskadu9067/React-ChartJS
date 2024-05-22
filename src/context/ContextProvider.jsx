import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [end_year, setEnd_year] = useState([]);
  const [intensity, setIntensity] = useState([]);
  const [sector, setSector] = useState([]);
  const [topic, setTopic] = useState([]);
  const [insight, setInsight] = useState([]);
  const [url, setUrl] = useState([]);
  const [region, setRegion] = useState([]);
  const [impact, setImpact] = useState([]);
  const [added, setAdded] = useState([]);
  const [published, setPublished] = useState([]);
  const [country, setCountry] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [pestle, setPestle] = useState([]);
  const [source, setSource] = useState([]);
  const [title, setTitle] = useState([]);
  const [likelihood, setLikelihood] = useState([]);
  const [show, setShow] = useState(false);
  const [Impact, setGraphImpact] = useState(false)
  

  return (
    <UserContext.Provider
      value={{
        end_year,
        setEnd_year,
        intensity,
        setIntensity,
        sector,
        setSector,
        topic,
        setTopic,
        insight,
        setInsight,
        url,
        setUrl,
        region,
        setRegion,
        impact,
        setImpact,
        added,
        setAdded,
        published,
        setPublished,
        country,
        setCountry,
        relevance,
        setRelevance,
        pestle,
        setPestle,
        source,
        setSource,
        title,
        setTitle,
        likelihood,
        setLikelihood,
        show,
        setShow,
        Impact, 
        setGraphImpact
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
