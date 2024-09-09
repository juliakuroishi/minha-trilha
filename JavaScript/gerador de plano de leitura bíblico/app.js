const PDFDocument = require('pdfkit');
const fs = require('fs');
const books = require('./books');  // Importando a lista de livros


// Função para gerar o plano de leitura com base na quantidade de capítulos por dia
function generateReadingPlan(chaptersPerDay, startDate) {
    let plan = [];
    let currentDate = new Date(startDate);

    books.forEach(book => {
        let bookName = book.name;
        let totalChapters = book.chapters;
        let chapter = 1;

        while (chapter <= totalChapters) {
            let startChapter = chapter;
            let endChapter = Math.min(chapter + chaptersPerDay - 1, totalChapters);

            // Formatação da data no formato dd/mm/yy
            let formattedDate = currentDate.toLocaleDateString("pt-BR");
            plan.push(` ${formattedDate}: ${bookName} Capítulos ${startChapter} a ${endChapter}`);

            // Avança para a próxima data
            currentDate.setDate(currentDate.getDate() + 1);

            chapter += chaptersPerDay;
        }
    });

    return plan;
}

// Função para gerar o PDF com checkbox e datas
function generatePDF(plan, filename) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filename));

    doc.fontSize(20).text('Plano de Leitura Bíblica', { align: 'center' });
    doc.moveDown();

    plan.forEach((entry, index) => {
        // Desenha o checkbox (um quadrado)
        doc.rect(50, doc.y, 10, 10).stroke();
        
        // Adiciona o texto ao lado do checkbox
        doc.fontSize(12).text(entry, 70, doc.y - 10); // Ajusta a posição do texto ao lado do checkbox
        
        doc.moveDown(1.5); // Move para a próxima linha
    });

    doc.end();
}

// Quantos capítulos por dia o usuário quer ler
const chaptersPerDay = 3;

// Data de início da leitura
const startDate = '2024-09-09'; // Data no formato yyyy-mm-dd

const readingPlan = generateReadingPlan(chaptersPerDay, startDate);

// Gera o PDF com o plano de leitura
generatePDF(readingPlan, 'plano_de_leitura.pdf');
