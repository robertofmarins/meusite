from flask import Flask, request, render_template
import psycopg2

app = Flask(__name__)

# Configuração da conexão com o banco de dados
db_config = {
    "dbname": "postgres",
    "user": "postgres.tdmatydkdczvyaftjqzp",
    "password": "Pretinha123**",
    "host": "aws-0-sa-east-1.pooler.supabase.com",
    "port": "6543"
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
