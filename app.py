from flask import Flask, request, render_template
import psycopg2

app = Flask(__name__)

# Configuração da conexão com o banco de dados
db_config = {
    "dbname": "meu site",
    "user": "postgres",
    "password": "Pretinha123**",
    "host": "db.tdmatydkdczvyaftjqzp.supabase.co",
    "port": "5432"
}

# Rota para exibir o formulário
@app.route("/")
def index():
    return render_template("index.html")

# Rota para processar os dados enviados
@app.route("/submit", methods=["POST"])
def submit():
    nome = request.form["name"]
    email = request.form["email"]
    telefone = request.form["telefone"]

    try:
        # Conectar ao banco de dados PostgreSQL
        conn = psycopg2.connect(**db_config)
        cur = conn.cursor()

        # Inserir os dados no banco de dados
        cur.execute("INSERT INTO usuarios (nome, email, telefone) VALUES (%s, %s, %s)", (nome, email, telefone))
        conn.commit()

        cur.close()
        conn.close()
        return "Dados enviados com sucesso!"
    except Exception as e:
        return f"Ocorreu um erro: {e}"

# Iniciar o servidor
if __name__ == "__main__":
    app.run(debug=True)
