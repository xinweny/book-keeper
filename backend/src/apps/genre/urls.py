from rest_framework import routers

from src.apps.genre.views import GenreViewSet

router = routers.DefaultRouter()
router.register(r'genres', GenreViewSet)