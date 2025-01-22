import React from 'react'

export default function footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer_div'>
            <div className='foot'>
                <h2>About Homie's</h2>
                <p>Homies is a full stack service provider for all Student , Teachers , Families with 5+ services including PG's, Hostels, Flats , Group Chat , Rooms Near College Area And Many More.As the largest platform for Renters and Owners of property to connect in a transparent manner.</p>
            </div>
            <div className='foot'>
                <h2>Properties in Satara</h2>
                <p> <label> Property in Godoli  </label>
                    <label> Property in Kodoli  </label> 
                    <label> Property in Sadar Bazar  </label> 
                    <label> Property in Powai Naka  </label> 
                    <label> Property near Bomday Restorent </label>
                    <label> Property near Saibaba Mandir </label> 
                    <label> Property in Karanje  </label> 
                    <label> Property in civil Hospital Road </label></p>
            </div>
        </div>
        <div className='footer_div'>
            <div className='foot'>
                <h2>More from our Network</h2>
                <p> Times of India
                    Economic Times
                    Navbharat times
                    India Times
                    Filmfare
                    MensXp
                    iDiva
                    TimesJobs
                    Gadgets Now
                </p>
            </div>
            <div className='foot'>
                <h2>Features</h2>
                <p> <label> Rooms Avibility </label>
                    <label> Resereved Rooms </label> 
                    <label> Freeup Date </label> 
                    <label> Local Area Rooms </label> 
                    <label> Feedback Macanisum </label>
                    <label> No Brokerage Charged </label> 
                    <label> Transperent Connection </label> 
                    <label> Group Chat </label></p>
            </div>
        </div>
        <div className='footer_mid'>
            <ul>
                <li><a href='chat.php'>Group Chat</a></li>
                <li><a href='termsandconditions.html'>Terms & Conditions</a></li>
                <li><a href='Privacypolicy.html'>Privacy Policy</a></li>
                <li><a href='Feedback.php'>Feedback</a></li>
                <li><a href='logout.php'>Logout</a></li>
            </ul>
        </div>
        <div className='footer_bottom'>
            <p>All trademarks, logos and names are properties of their respective owners.</p>
            <p>All Rights Reserved. © Copyright 2023 Homies Home service Limited.</p>
        </div>
    </div>
    </>
  )
}
