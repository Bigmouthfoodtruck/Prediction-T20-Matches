document.addEventListener('DOMContentLoaded', function() {
    const matches = [
        { date: 'Sat, 1 June 2024', match: 'USA vs CANADA', venue: 'Dallas', teamA: 'USA WIN', teamB: 'CANADA WIN' },
        { date: 'Sun, 2 June 2024', match: 'WEST INDIES vs PAPUA NEW GUINEA', venue: 'Guyana', teamA: 'WEST INDIES WIN', teamB: 'PAPUA NEW GUINEA WIN' },
        { date: 'Sun, 2 June 2024', match: 'NAMIBIA vs OMAN', venue: 'Barbados', teamA: 'NAMIBIA WIN', teamB: 'OMAN WIN' },
        { date: 'Mon, 3 June 2024', match: 'SRI LANKA vs SOUTH AFRICA', venue: 'New York', teamA: 'SRI LANKA WIN', teamB: 'SOUTH AFRICA WIN' },
        { date: 'Mon, 3 June 2024', match: 'AFGHANISTAN vs UGANDA', venue: 'Guyana', teamA: 'AFGHANISTAN WIN', teamB: 'UGANDA WIN' },
        { date: 'Tue, 4 June 2024', match: 'ENGLAND vs SCOTLAND', venue: 'Barbados', teamA: 'ENGLAND WIN', teamB: 'SCOTLAND WIN' },
        { date: 'Tue, 4 June 2024', match: 'NETHERLANDS vs NEPAL', venue: 'Dallas', teamA: 'NETHERLANDS WIN', teamB: 'NEPAL WIN' },
        { date: 'Wed, 5 June 2024', match: 'INDIA vs IRELAND', venue: 'New York', teamA: 'INDIA WIN', teamB: 'IRELAND WIN' },
        { date: 'Wed, 5 June 2024', match: 'PAPUA NEW GUINEA vs UGANDA', venue: 'Guyana', teamA: 'PAPUA NEW GUINEA WIN', teamB: 'UGANDA WIN' },
        { date: 'Wed, 5 June 2024', match: 'AUSTRALIA vs OMAN', venue: 'Barbados', teamA: 'AUSTRALIA WIN', teamB: 'OMAN WIN' },
        { date: 'Thur, 6 June 2024', match: 'USA vs PAKISTAN', venue: 'Dallas', teamA: 'USA WIN', teamB: 'PAKISTAN WIN' },
        { date: 'Thur, 6 June 2024', match: 'NAMIBIA vs SCOTLAND', venue: 'Barbados', teamA: 'NAMIBIA WIN', teamB: 'SCOTLAND WIN' },
        { date: 'Fri, 7 June 2024', match: 'CANADA vs IRELAND', venue: 'New York', teamA: 'CANADA WIN', teamB: 'IRELAND WIN' },
        { date: 'Fri, 7 June 2024', match: 'NEW ZEALAND vs AFGHANISTAN', venue: 'Guyana', teamA: 'NEW ZEALAND WIN', teamB: 'AFGHANISTAN WIN' },
        { date: 'Fri, 7 June 2024', match: 'SRI LANKA vs BANGLADESH', venue: 'Dallas', teamA: 'SRI LANKA WIN', teamB: 'BANGLADESH WIN' },
        { date: 'Sat, 8 June 2024', match: 'NETHERLANDS vs SOUTH AFRICA', venue: 'New York', teamA: 'NETHERLANDS WIN', teamB: 'SOUTH AFRICA WIN' },
        { date: 'Sat, 8 June 2024', match: 'AUSTRALIA vs ENGLAND', venue: 'Barbados', teamA: 'AUSTRALIA WIN', teamB: 'ENGLAND WIN' },
        { date: 'Sat, 8 June 2024', match: 'WEST INDIES vs UGANDA', venue: 'Guyana', teamA: 'WEST INDIES WIN', teamB: 'UGANDA WIN' },
        { date: 'Sun, 9 June 2024', match: 'INDIA vs PAKISTAN', venue: 'New York', teamA: 'INDIA WIN', teamB: 'PAKISTAN WIN' },
        { date: 'Sun, 9 June 2024', match: 'OMAN vs SCOTLAND', venue: 'Antigua', teamA: 'OMAN WIN', teamB: 'SCOTLAND WIN' },
        { date: 'Mon, 10 June 2024', match: 'SOUTH AFRICA vs BANGLADESH', venue: 'New York', teamA: 'SOUTH AFRICA WIN', teamB: 'BANGLADESH WIN' },
        { date: 'Tue, 11 June 2024', match: 'PAKISTAN vs CANADA', venue: 'New York', teamA: 'PAKISTAN WIN', teamB: 'CANADA WIN' },
        { date: 'Tue, 11 June 2024', match: 'SRI LANKA vs NEPAL', venue: 'Florida', teamA: 'SRI LANKA WIN', teamB: 'NEPAL WIN' },
        { date: 'Tue, 11 June 2024', match: 'AUSTRALIA vs NAMIBIA', venue: 'Antigua', teamA: 'AUSTRALIA WIN', teamB: 'NAMIBIA WIN' },
        { date: 'Wed, 12 June 2024', match: 'USA vs INDIA', venue: 'New York', teamA: 'USA WIN', teamB: 'INDIA WIN' },
        { date: 'Wed, 12 June 2024', match: 'WEST INDIES vs NEW ZEALAND', venue: 'Trinidad', teamA: 'WEST INDIES WIN', teamB: 'NEW ZEALAND WIN' },
        { date: 'Thur, 13 June 2024', match: 'ENGLAND vs OMAN', venue: 'Antigua', teamA: 'ENGLAND WIN', teamB: 'OMAN WIN' },
        { date: 'Thur, 13 June 2024', match: 'BANGLADESH vs NETHERLANDS', venue: 'St. Vincent', teamA: 'BANGLADESH WIN', teamB: 'NETHERLANDS WIN' },
        { date: 'Thur, 13 June 2024', match: 'AFGHANISTAN vs PAPUA NEW GUINEA', venue: 'Trinidad', teamA: 'AFGHANISTAN WIN', teamB: 'PAPUA NEW GUINEA WIN' },
        { date: 'Fri, 14 June 2024', match: 'USA vs IRELAND', venue: 'Florida', teamA: 'USA WIN', teamB: 'IRELAND WIN' },
        { date: 'Fri, 14 June 2024', match: 'SOUTH AFRICA vs NEPAL', venue: 'St. Vincent', teamA: 'SOUTH AFRICA WIN', teamB: 'NEPAL WIN' },
        { date: 'Fri, 14 June 2024', match: 'NEW ZEALAND vs UGANDA', venue: 'Trinidad', teamA: 'NEW ZEALAND WIN', teamB: 'UGANDA WIN' },
        { date: 'Sat, 15 June 2024', match: 'INDIA vs CANADA', venue: 'Florida', teamA: 'INDIA WIN', teamB: 'CANADA WIN' },
        { date: 'Sat, 15 June 2024', match: 'NAMIBIA vs ENGLAND', venue: 'Antigua', teamA: 'NAMIBIA WIN', teamB: 'ENGLAND WIN' },
        { date: 'Sat, 15 June 2024', match: 'AUSTRALIA vs SCOTLAND', venue: 'St. Lucia', teamA: 'AUSTRALIA WIN', teamB: 'SCOTLAND WIN' },
        { date: 'Sun, 16 June 2024', match: 'PAKISTAN vs IRELAND', venue: 'Florida', teamA: 'PAKISTAN WIN', teamB: 'IRELAND WIN' },
        { date: 'Sun, 16 June 2024', match: 'BANGLADESH vs NEPAL', venue: 'St. Vincent', teamA: 'BANGLADESH WIN', teamB: 'NEPAL WIN' },
        { date: 'Sun, 16 June 2024', match: 'SRI LANKA vs NETHERLANDS', venue: 'St. Lucia', teamA: 'SRI LANKA WIN', teamB: 'NETHERLANDS WIN' },
        { date: 'Mon, 17 June 2024', match: 'NEW ZEALAND vs PAPUA NEW GUINEA', venue: 'Trinidad', teamA: 'NEW ZEALAND WIN', teamB: 'PAPUA NEW GUINEA WIN' },
        { date: 'Mon, 17 June 2024', match: 'WEST INDIES vs AFGHANISTAN', venue: 'St. Lucia', teamA: 'WEST INDIES WIN', teamB: 'AFGHANISTAN WIN' }
    ];

    const container = document.getElementById('questions-container');

    matches.forEach((match, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('prediction-question');

        const label = document.createElement('label');
        label.textContent = `${match.date} - ${match.match} at ${match.venue}`;

        const select = document.createElement('select');
        select.name = `match${index}`;

        const optionA = document.createElement('option');
        optionA.value = match.teamA;
        optionA.textContent = match.teamA;

        const optionB = document.createElement('option');
        optionB.value = match.teamB;
        optionB.textContent = match.teamB;

        const optionDraw = document.createElement('option');
        optionDraw.value = 'DRAW';
        optionDraw.textContent = 'DRAW';

        select.appendChild(optionA);
        select.appendChild(optionB);
        select.appendChild(optionDraw);

        questionDiv.appendChild(label);
        questionDiv.appendChild(select);

        container.appendChild(questionDiv);
    });

    document.getElementById('prediction-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const results = Array.from(formData.entries()).map(([key, value]) => {
            return `<li>${key.replace('match', 'Match ')}: ${value}</li>`;
        }).join('');

        document.getElementById('results').innerHTML = `<p>You predicted the following winners:</p><ul>${results}</ul>`;
    });
});

