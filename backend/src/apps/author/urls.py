from rest_framework import routers

from src.apps.author.views import AuthorViewSet

router = routers.DefaultRouter()
router.register(r'authors', AuthorViewSet)