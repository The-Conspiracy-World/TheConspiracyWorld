import React from "react";
function Learnmore(){
    return (
        <div style={{
            padding:"5vh"
        }}>
            <h3 style={{
                fontSize:"5vh"
            }}>How Conspiracy World works</h3>
            <p>
                
            👉Every body can signup and post a conspiracy theory with a valid evidence including web articles, videos, documentaries, etc... <br/>
            👉People can show their engagement to the post posted by any user by liking, commenting, and sharing the post <br/>
            👉<a href="#experts" style={{ textDecoration:"underline"}}>Experts</a> who have expertise in certain field will checkout the conspiracy theory, and vote whether the theory is a fact, myth, or just a conspiracy. <br />
            👉Based on the distribution of votings by experts a catalog will be shown on the top of the each post, highlighting whether it is a fact or conspiracy or myth <br />
        
            </p>
            <br/>
            <h3 style={{
                fontSize:"5vh"
            }}>Who are Experts</h3>
            <p style={{textAlign:"justify"}}>
                
            👉Experts are people who have expertise in certain field <br/>
            👉Eg:- A person who holds a degree in physics is considered an expert in the field of physics<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A person who is working on a research on Extraterrestial Life is an expert in the field of Extraterrestial Life.<br/>
            👉Only an Expert in the respective field can vote a post [A Conspiracy Theory], whether it is a Fact, Conspiracy, or a Myth.
        
            </p>
            <br/>
            <h3 style={{
                fontSize:"5vh"
            }}>Catalog System</h3>
            <p style={{textAlign:"justify"}}>
                
            There are 4 catalogs determined according to the votes of Experts of the respective world <br/>
           
            <tr>
                <td>👉Hypothesis</td>
                <td>:- A theory that is based on a proven fact, and can be proved theoratically, but unable to prove practically with our current capabilities<br/></td>
            </tr><tr>
                <td>👉Conspiracy</td>
                <td>:- A theory that is neither provable nor disprovable.<br/></td>
            </tr><tr>
                <td>👉Myth</td>
                <td>:- A theory that can be disproved practically with experiments and observations.<br/></td>
            </tr>
            <tr>
                <td>👉Pending</td>
                <td>:- A theory that is pending to be voted by experts<br/></td>
            </tr>
            

        
            </p>
        </div>
    );
}
export default Learnmore;