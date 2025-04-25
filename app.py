from flask import Flask, request, render_template
import psycopg2
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()
# Carregar variáveis de ambiente do arquivo .env
# Configuração da conexão com o banco de dados
db_config = {
    "dbname": os.getenv("DB_NAME"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "host": os.getenv("DB_HOST"),
    "port": os.getenv("DB_PORT")
}

# Rota para exibir o formulário
@app.route("/")
def index():
    return render_template("index.html")

# Rota para processar os dados enviados
@app.route("/submit", methods=["POST"])
def submit():
    nome = request.form["nome"]
    email = request.form["email"]
    telefone = request.form["telefone"]
    mensagem = request.form["mensagem"]

    try:
        # Conectar ao banco de dados PostgreSQL
        conn = psycopg2.connect(**db_config)
        cur = conn.cursor()

        # Inserir os dados no banco de dados
        cur.execute("INSERT INTO usuarios (nome, email, telefone, mensagem) VALUES (%s, %s, %s, %s)", (nome, email, telefone, mensagem))
        conn.commit()

        cur.close()
        conn.close()
        return "Dados enviados com sucesso!"
    except Exception as e:
        return f"Ocorreu um erro: {e}"

# Iniciar o servidor
if __name__ == "__main__":
    app.run(debug=True)
