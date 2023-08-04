function About () {
    return (
        <div>

        <div className="top-heading">
         <h1 > FIND YOUR DREAM JOB BY SIMPLE FILLING THIS FORM </h1>
         <img src="https://tse4.mm.bing.net/th?id=OIP._AJ7byjuYeqEaE8v3YnMfQHaFG&pid=Api&P=0&h=180" alt="" />
        </div>

         <form className="job-form" action="process_application.php" method="POST">
         <h1 className="heading">Job Application</h1>
        <label calssName="naam" for="name">Full Name:</label>
        <input type="text" id="name" name="name" required /><br/><br/>
        
        <label calssName="naam" for="email">Email:</label>
        <input type="email" id="email" name="email" required /><br/><br/>
        
        <label calssName="naam" for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required /><br/><br/>
        
        <label calssName="naam" for="resume">Resume/CV:</label>
        <input type="file" id="resume" name="resume" required /><br/><br/>
        
        <label calssName="naam" for="cover-letter">Cover Letter:</label><br/>
        <textarea id="cover-letter" name="cover-letter" rows="5" cols="30" required></textarea><br/><br/>
        
        <label calssName="naam" for="position">Position:</label>
        <select id="position" name="position" required>
            <option value="" disabled selected>Select a position</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="manager">Data Scientist</option>
        </select><br/><br/>
        
        <input type="submit" value="Submit Application" />
    </form>

        </div>
    )
}

export default About;