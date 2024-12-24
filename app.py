from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
    # You can add code here to save the data to a database or process it as needed
    return render_template('success.html', name=name)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
