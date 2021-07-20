export default function selectionMap({ series, films }) {
    return {
        series: [
            {
                title: 'Documentaries',
                data: series.filter((show) => show.genre === 'documentaries')
            },
            {
                title: 'Comedies',
                data: series.filter((show) => show.genre === 'comedies')
            },
            {
                title: 'Children',
                data: series.filter((show) => show.genre === 'children')
            },
            {
                title: 'Feel Good',
                data: series.filter((show) => show.genre === 'feel-good')
            },
        ],
        films: [
            {
                title: 'Drama',
                data: films.filter((film) => film.genre === 'drama')
            },
            {
                title: 'Thriller',
                data: films.filter((film) => film.genre === 'thriller')
            },
            {
                title: 'Children',
                data: films.filter((film) => film.genre === 'children')
            },
            {
                title: 'Suspense',
                data: films.filter((film) => film.genre === 'suspense')
            },
            {
                title: 'Romance',
                data: films.filter((film) => film.genre === 'romance')
            },
        ]
    }
}