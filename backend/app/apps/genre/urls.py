from rest_framework import routers

from app.apps.genre.views import GenreViewSet

router = routers.DefaultRouter()
router.register(r'genres', GenreViewSet)