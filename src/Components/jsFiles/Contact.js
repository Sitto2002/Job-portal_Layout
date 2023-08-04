function Contact () {
    return (
        <div>

    <h1>Contact Us</h1>
    <form action="process_contact.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required /><br/><br/>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required /><br/><br/>
        
        <label for="message">Message:</label><br/>
        <textarea id="message" name="message" rows="5" cols="30" required></textarea><br/><br/>
        
        <input type="submit" value="Send Message"/>
    </form>
        </div>
    );
}
export default Contact;