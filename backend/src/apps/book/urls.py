from rest_framework import routers

from src.apps.book.views import BookViewSet

router = routers.DefaultRouter()
router.register(r'books', BookViewSet)