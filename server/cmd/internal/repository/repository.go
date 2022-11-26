package repository

import (
	"database/sql"
	"github.com/DylanMorison/working-with-react-and-golang/cmd/internal/models"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllMovies() ([]*models.Movie, error)
}
