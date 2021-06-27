import React from "react";

const Form = () => {
  return (
    <div>
        <form action="">
            <div className="info-grid">
                <input type="text" id="fname" name="firstname" placeholder="Име" required/>
        
                <input type="text" id="lname" name="lastname" placeholder="Фамилия" required/>
    
                <input type="tel" id="phone" name="phone" placeholder="Телефонен номер"/>
    
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>

            <input type="text" id="subject" name="subject" placeholder="Тема" required/>
                
            <textarea id="text" name="text" placeholder="Текст" required></textarea>
                
            <input type="submit" value="Подай"/>
        </form>
    </div>
  );
};

export default Form;
