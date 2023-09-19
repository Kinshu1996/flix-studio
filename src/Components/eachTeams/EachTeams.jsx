import React, { useState } from 'react'
import "./EachTeams.scss";
import CatalogTeam from '../teams/CatalogTeam';
import MarketingTeam from '../teams/MarketingTeam';
import CreativeTeam from '../teams/CreativeTeam';
import ListingTeam from '../teams/ListingTeam';

const EachTeams = () => {
  const [activeTeam, setActiveTeam] = useState("1");
  const handleActiveTeam = (e) => {
      setActiveTeam(e.target.id);
  }
  return (
    <div className='each-teams-section'>
      <div className='each-teams-container'>
        <div className='top-section'>
          <div className='sub-heading'>Take your productivity to new heights</div>
          <div className='heading'>Build for everyone yet personalised <br /> for specific needs for each teams</div>
          <div className='button-container'>
            <div className={activeTeam === "1" ? "active-team-btn" : "team-btn"} id={"1"} onClick={handleActiveTeam} >Catalog team</div>
            <div className={activeTeam === "2" ? "active-team-btn" : "team-btn"} id={"2"} onClick={handleActiveTeam} >Marketing team</div>
            <div className={activeTeam === "3" ? "active-team-btn" : "team-btn"} id={"3"} onClick={handleActiveTeam} >Creative team</div>
            <div className={activeTeam === "4" ? "active-team-btn" : "team-btn"} id={"4"} onClick={handleActiveTeam} >Listing team</div>
          </div>
        </div>
        <div className='bottom-section text-focus-in'>
          {
            activeTeam === "1" ? <CatalogTeam /> : activeTeam === "2" ? <MarketingTeam /> : activeTeam === "3" ? <CreativeTeam /> : <ListingTeam />
          }
        </div>
      </div>
    </div>
  )
}

export default EachTeams
