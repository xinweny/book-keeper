from rest_framework import routers

from app.apps.book.urls import router as book_router
from app.apps.author.urls import router as author_router
from app.apps.genre.urls import router as genre_router

router = routers.DefaultRouter()

router.registry.extend(book_router.registry)
router.registry.extend(author_router.registry)
router.registry.extend(genre_router.registry)
