from rest_framework import routers

from app.apps.book.views import BookViewSet

router = routers.DefaultRouter()
router.register(r'books', BookViewSet)