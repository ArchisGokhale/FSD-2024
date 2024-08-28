from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# In-memory storage for posts
posts = []

@app.route('/')
def home():
    return render_template('index.html', posts=posts)

@app.route('/api/post_message', methods=['POST'])
def post_message():
    data = request.json
    user = data.get('user', 'Anonymous')
    message = data.get('message', '')
    
    # Add the post to the list
    posts.append({'user': user, 'message': message})
    
    return jsonify({'status': 'success', 'message': 'Message posted successfully.'})

@app.route('/api/like_message', methods=['POST'])
def like_message():
    data = request.json
    index = data.get('index')
    
    # Like the post by incrementing a like counter
    if 0 <= index < len(posts):
        posts[index].setdefault('likes', 0)
        posts[index]['likes'] += 1
        return jsonify({'status': 'success', 'message': 'Message liked successfully.'})
    return jsonify({'status': 'error', 'message': 'Invalid index.'})

@app.route('/api/get_messages', methods=['GET'])
def get_messages():
    return jsonify(posts)

if __name__ == '__main__':
    app.run(debug=True)
