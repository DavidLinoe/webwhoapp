import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import hljs from 'highlight.js';


@Component({
  selector: 'semaphore-code',
  standalone: true,
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class SemaphoreCodeComponent implements AfterViewInit {
  @ViewChild('codeAuth') codeAuth!: ElementRef;
  @ViewChild('codeApi') codeApi!: ElementRef;
  @ViewChild('codeEsp') codeEsp!: ElementRef;

  authCode: string = `
<pre><code class="language-python">
from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

# Função para conectar ao banco de dados
def get_db_connection():
    conn = psycopg2.connect(
        host="isabelle.db.elephantsql.com",
        database="gzlfmzdd",
        user="gzlfmzdd",
        password="uDwZWDMOoDa-SjhwAFyYgeBjNByl2-kx"
    )
    return conn

# Rota para autenticação
@app.route('/auth', methods=['POST'])
def auth():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        query = sql.SQL("SELECT * FROM login WHERE username = %s AND password = %s")
        cursor.execute(query, (username, password))
        user = cursor.fetchone()

        if user:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"error": "Invalid username or password"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

# Rota para atualizar dados na tabela 'semaphore'
@app.route('/semaphore/<int:id>', methods=['PUT'])
def update_semaphore(id):
    data = request.json
    prioridade = data.get('prioridade')
    unidade = data.get('unidade')
    ultima_quantidade = data.get('ultima_quantidade')
    tempo_verde = data.get('tempo_verde')
    tempo_vermelho = data.get('tempo_vermelho')
    tempo_amarelo = data.get('tempo_amarelo')
    tempo_total = data.get('tempo_total')

    if not (prioridade and unidade and ultima_quantidade and tempo_verde and tempo_vermelho and tempo_amarelo and tempo_total):
        return jsonify({"error": "Todos os campos são necessários: prioridade, unidade, ultima_quantidade, tempo_verde, tempo_vermelho, tempo_amarelo e tempo_total"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Atualiza os dados na tabela 'semaphore'
        query = sql.SQL("""
            UPDATE semaphore
            SET prioridade = %s, unidade = %s, ultima_quantidade = %s, 
                tempo_verde = %s, tempo_vermelho = %s, tempo_amarelo = %s, tempo_total = %s
            WHERE id = %s
        """)
        cursor.execute(query, (prioridade, unidade, ultima_quantidade, tempo_verde, tempo_vermelho, tempo_amarelo, tempo_total, id))
        conn.commit()

        if cursor.rowcount == 0:
            return jsonify({"error": "Registro não encontrado"}), 404

        return jsonify({"message": "Dados atualizados com sucesso"}), 200

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

# Rota para buscar todos os registros da tabela 'semaphore'
@app.route('/semaphore', methods=['GET'])
def get_all_semaphore():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Consulta todos os dados da tabela 'semaphore'
        query = sql.SQL("SELECT * FROM semaphore")
        cursor.execute(query)
        rows = cursor.fetchall()

        results = []
        for row in rows:
            results.append({
                "id": row[0],
                "prioridade": row[1],
                "unidade": row[2],
                "ultima_quantidade": row[3],
                "tempo_verde": row[4],
                "tempo_vermelho": row[5],
                "tempo_amarelo": row[6],
                "tempo_total": row[7]
            })

        return jsonify(results), 200

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()


# Rota para buscar um registro específico da tabela 'semaphore' por id
@app.route('/semaphore/<int:id>', methods=['GET'])
def get_semaphore_by_id(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Consulta um registro específico da tabela 'semaphore' pelo id
        query = sql.SQL("SELECT * FROM semaphore WHERE id = %s")
        cursor.execute(query, (id,))
        row = cursor.fetchone()

        if row:
            result = {
                "id": row[0],
                "prioridade": row[1],
                "unidade": row[2],
                "ultima_quantidade": row[3],
                "tempo_verde": row[4],
                "tempo_vermelho": row[5],
                "tempo_amarelo": row[6],
                "tempo_total": row[7]
            }
            return jsonify(result), 200
        else:
            return jsonify({"error": "Registro não encontrado"}), 404

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Inicia na porta 5001



</code></pre>`;


apiCode: string = `
<pre><code class="language-python">
from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

# Função para conectar ao banco de dados
def get_db_connection():
    conn = psycopg2.connect(
        host="isabelle.db.elephantsql.com",
        database="gzlfmzdd",
        user="gzlfmzdd",
        password="uDwZWDMOoDa-SjhwAFyYgeBjNByl2-kx"
    )
    return conn

# Rota para autenticação
@app.route('/auth', methods=['POST'])
def auth():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        query = sql.SQL("SELECT * FROM login WHERE username = %s AND password = %s")
        cursor.execute(query, (username, password))
        user = cursor.fetchone()

        if user:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"error": "Invalid username or password"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

# Rota para atualizar dados na tabela 'semaphore'
@app.route('/semaphore/<int:id>', methods=['PUT'])
def update_semaphore(id):
    data = request.json
    prioridade = data.get('prioridade')
    unidade = data.get('unidade')
    ultima_quantidade = data.get('ultima_quantidade')
    tempo_verde = data.get('tempo_verde')
    tempo_vermelho = data.get('tempo_vermelho')
    tempo_amarelo = data.get('tempo_amarelo')
    tempo_total = data.get('tempo_total')

    if not (prioridade and unidade and ultima_quantidade and tempo_verde and tempo_vermelho and tempo_amarelo and tempo_total):
        return jsonify({"error": "Todos os campos são necessários: prioridade, unidade, ultima_quantidade, tempo_verde, tempo_vermelho, tempo_amarelo e tempo_total"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Atualiza os dados na tabela 'semaphore'
        query = sql.SQL("""
            UPDATE semaphore
            SET prioridade = %s, unidade = %s, ultima_quantidade = %s, 
                tempo_verde = %s, tempo_vermelho = %s, tempo_amarelo = %s, tempo_total = %s
            WHERE id = %s
        """)
        cursor.execute(query, (prioridade, unidade, ultima_quantidade, tempo_verde, tempo_vermelho, tempo_amarelo, tempo_total, id))
        conn.commit()

        if cursor.rowcount == 0:
            return jsonify({"error": "Registro não encontrado"}), 404

        return jsonify({"message": "Dados atualizados com sucesso"}), 200

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

# Rota para buscar todos os registros da tabela 'semaphore'
@app.route('/semaphore', methods=['GET'])
def get_all_semaphore():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Consulta todos os dados da tabela 'semaphore'
        query = sql.SQL("SELECT * FROM semaphore")
        cursor.execute(query)
        rows = cursor.fetchall()

        results = []
        for row in rows:
            results.append({
                "id": row[0],
                "prioridade": row[1],
                "unidade": row[2],
                "ultima_quantidade": row[3],
                "tempo_verde": row[4],
                "tempo_vermelho": row[5],
                "tempo_amarelo": row[6],
                "tempo_total": row[7]
            })

        return jsonify(results), 200

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()


# Rota para buscar um registro específico da tabela 'semaphore' por id
@app.route('/semaphore/<int:id>', methods=['GET'])
def get_semaphore_by_id(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Consulta um registro específico da tabela 'semaphore' pelo id
        query = sql.SQL("SELECT * FROM semaphore WHERE id = %s")
        cursor.execute(query, (id,))
        row = cursor.fetchone()

        if row:
            result = {
                "id": row[0],
                "prioridade": row[1],
                "unidade": row[2],
                "ultima_quantidade": row[3],
                "tempo_verde": row[4],
                "tempo_vermelho": row[5],
                "tempo_amarelo": row[6],
                "tempo_total": row[7]
            }
            return jsonify(result), 200
        else:
            return jsonify({"error": "Registro não encontrado"}), 404

    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Inicia na porta 5001



</code></pre>`;


espCode: string = `
<pre><code class="language-cpp">
#include <WebServer.h>
#include <WiFi.h>
#include <esp32cam.h>
 
const char* WIFI_SSID = "A14D";
const char* WIFI_PASS = "nthm1233";
 
WebServer server(80);
 
 
static auto loRes = esp32cam::Resolution::find(320, 240);
static auto midRes = esp32cam::Resolution::find(350, 530);
static auto hiRes = esp32cam::Resolution::find(800, 600);
void serveJpg()
{
  auto frame = esp32cam::capture();
  if (frame == nullptr) {
    Serial.println("CAPTURE FAIL");
    server.send(503, "", "");
    return;
  }
  Serial.printf("CAPTURE OK %dx%d %db\n", frame->getWidth(), frame->getHeight(),
                static_cast<int>(frame->size()));
 
  server.setContentLength(frame->size());
  server.send(200, "image/jpeg");
  WiFiClient client = server.client();
  frame->writeTo(client);
}
 
void handleJpgLo()
{
  if (!esp32cam::Camera.changeResolution(loRes)) {
    Serial.println("SET-LO-RES FAIL");
  }
  serveJpg();
}
 
void handleJpgHi()
{
  if (!esp32cam::Camera.changeResolution(hiRes)) {
    Serial.println("SET-HI-RES FAIL");
  }
  serveJpg();
}
 
void handleJpgMid()
{
  if (!esp32cam::Camera.changeResolution(midRes)) {
    Serial.println("SET-MID-RES FAIL");
  }
  serveJpg();
}
 
 
void  setup(){
  Serial.begin(115200);
  Serial.println();
  {
    using namespace esp32cam;
    Config cfg;
    cfg.setPins(pins::AiThinker);
    cfg.setResolution(hiRes);
    cfg.setBufferCount(2);
    cfg.setJpeg(80);
 
    bool ok = Camera.begin(cfg);
    Serial.println(ok ? "CAMERA OK" : "CAMERA FAIL");
  }
  WiFi.persistent(false);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  Serial.print("http://");
  Serial.println(WiFi.localIP());
  Serial.println("  /cam-lo.jpg");
  Serial.println("  /cam-hi.jpg");
  Serial.println("  /cam-mid.jpg");
 
  server.on("/cam-lo.jpg", handleJpgLo);
  server.on("/cam-hi.jpg", handleJpgHi);
  server.on("/cam-mid.jpg", handleJpgMid);
 
  server.begin();
}
 
void loop()
{
  server.handleClient();
}
</code></pre>`;

  ngAfterViewInit() {
    const blocks = this.codeAuth.nativeElement.querySelectorAll('pre code');
    blocks.forEach((block: HTMLElement) => {
      hljs.highlightElement(block);
    });
    const blocks1 = this.codeApi.nativeElement.querySelectorAll('pre code');
    blocks1.forEach((block: HTMLElement) => {
      hljs.highlightElement(block);
    });

    const blocks2 = this.codeEsp.nativeElement.querySelectorAll('pre code');
    blocks2.forEach((block: HTMLElement) => {
      hljs.highlightElement(block);
    });






  }
}
