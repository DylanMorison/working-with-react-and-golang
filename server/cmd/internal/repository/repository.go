package repository

import "github.com/DylanMorison/working-with-react-and-golang/cmd/internal/models"

type DatabaseRepo interface {
	AllMovies() ([]*models.Movie, error)
}
