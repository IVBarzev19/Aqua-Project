import React from "react";

const Form = () => {
  return (
    <div>
        <div class="team-indent"></div>
        <div class="team-grid">
            <div>
                <img src="https://avatars.githubusercontent.com/u/63721543?v=4" alt="Team Member"/>
                <h1>Presian Stefanov</h1>
                <h2>Front-End</h2>
            </div>
            
            <div>
                <img src="https://avatars.githubusercontent.com/u/63734409?v=4" alt="Bill"/>
                <h1>Daniel Georgiev</h1>
                <h2>Designer</h2>
            </div>

            <div>
                <img src="https://avatars.githubusercontent.com/u/63741178?v=4" alt="Bill"/>
                <h1>Ivan Burzev</h1>
                <h2>Back-End</h2>
            </div>

            <div>
                <img src="https://avatars.githubusercontent.com/u/85344134?v=4" alt="Bill"/>
                <h1>Denislav Bratoevsky</h1>
                <h2>QA Engineer</h2>
            </div>
        </div>

        <div className="team-info">
            <div>
                <h1>Presian Stefanov</h1>
                <p>
                    Took the role of Front-End developer. My job was to make React work.
                </p>
            </div>

            <div>
                <h1>Daniel Georgiev</h1>
                <p>
                    Took the role of Designer. My job was to design the site and choose the images we used.
                </p>
            </div>

            <div>
                <h1>Ivan Burzev</h1>
                <p>
                    I took the role of Back-End developer. I had to make the site functional.
                </p>
            </div>

            <div>
                <h1>Denislav Bratoevsky</h1>
                <p>
                    I took the role of QA Engineer. I checked for bugs and gave my opinion about possible solutions for them.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Form;
