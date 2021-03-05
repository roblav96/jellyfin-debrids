export namespace Components {
	namespace Schemas {
		/**
		 * An entity representing a user's access schedule.
		 */
		export interface AccessSchedule {
			/**
			 * Gets or sets the day of week.
			 */
			DayOfWeek: /* An enum that represents a day of the week, weekdays, weekends, or all days. */ DynamicDayOfWeek;
			/**
			 * Gets or sets the end hour.
			 */
			EndHour: number; // double
			/**
			 * Gets or sets the id of this instance.
			 */
			readonly Id: number; // int32
			/**
			 * Gets or sets the start hour.
			 */
			StartHour: number; // double
			/**
			 * Gets or sets the id of the associated user.
			 */
			readonly UserId: string; // uuid
		}
		export interface ActivityLogEntry {
			/**
			 * Gets or sets the date.
			 */
			Date?: string; // date-time
			/**
			 * Gets or sets the identifier.
			 */
			Id?: number; // int64
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the overview.
			 */
			Overview?: string;
			/**
			 * Gets or sets the log severity.
			 */
			Severity?: LogLevel;
			/**
			 * Gets or sets the short overview.
			 */
			ShortOverview?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
			/**
			 * Gets or sets the user identifier.
			 */
			UserId?: string; // uuid
			/**
			 * Gets or sets the user primary image tag.
			 */
			UserPrimaryImageTag?: string;
		}
		export interface ActivityLogEntryQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: ActivityLogEntry[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		/**
		 * Add virtual folder dto.
		 */
		export interface AddVirtualFolderDto {
			/**
			 * Gets or sets library options.
			 */
			LibraryOptions?: LibraryOptions;
		}
		export interface AlbumInfo {
			/**
			 * Gets or sets the album artist.
			 */
			AlbumArtists?: string[];
			/**
			 * Gets or sets the artist provider ids.
			 */
			ArtistProviderIds?: {
				[name: string]: string;
			};
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			SongInfos?: SongInfo[];
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface AlbumInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: AlbumInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface AllThemeMediaResult {
			/**
			 * Class ThemeMediaResult.
			 */
			SoundtrackSongsResult?: /* Class ThemeMediaResult. */ ThemeMediaResult;
			/**
			 * Class ThemeMediaResult.
			 */
			ThemeSongsResult?: /* Class ThemeMediaResult. */ ThemeMediaResult;
			/**
			 * Class ThemeMediaResult.
			 */
			ThemeVideosResult?: /* Class ThemeMediaResult. */ ThemeMediaResult;
		}
		export type Architecture = 'X86' | 'X64' | 'Arm' | 'Arm64' | 'Wasm';
		export interface ArtistInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			SongInfos?: SongInfo[];
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface ArtistInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: ArtistInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		/**
		 * The authenticate user by name request body.
		 */
		export interface AuthenticateUserByName {
			/**
			 * Gets or sets the sha1-hashed password.
			 */
			Password?: string;
			/**
			 * Gets or sets the plain text password.
			 */
			Pw?: string;
			/**
			 * Gets or sets the username.
			 */
			Username?: string;
		}
		export interface AuthenticationInfo {
			/**
			 * Gets or sets the access token.
			 */
			AccessToken?: string;
			/**
			 * Gets or sets the name of the application.
			 */
			AppName?: string;
			/**
			 * Gets or sets the application version.
			 */
			AppVersion?: string;
			/**
			 * Gets or sets the date created.
			 */
			DateCreated?: string; // date-time
			DateLastActivity?: string; // date-time
			/**
			 * Gets or sets the date revoked.
			 */
			DateRevoked?: string; // date-time
			/**
			 * Gets or sets the device identifier.
			 */
			DeviceId?: string;
			/**
			 * Gets or sets the name of the device.
			 */
			DeviceName?: string;
			/**
			 * Gets or sets the identifier.
			 */
			Id?: number; // int64
			/**
			 * Gets or sets a value indicating whether this instance is active.
			 */
			IsActive?: boolean;
			/**
			 * Gets or sets the user identifier.
			 */
			UserId?: string; // uuid
			UserName?: string;
		}
		export interface AuthenticationInfoQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: AuthenticationInfo[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface AuthenticationResult {
			AccessToken?: string;
			ServerId?: string;
			/**
			 * Class SessionInfo.
			 */
			SessionInfo?: /* Class SessionInfo. */ SessionInfo;
			/**
			 * Class UserDto.
			 */
			User?: /* Class UserDto. */ UserDto;
		}
		/**
		 * Class BaseItem.
		 */
		export interface BaseItem {
			Container?: string;
			DateLastSaved?: string; // date-time
			ExtraIds?: string /* uuid */[];
			Height?: number; // int32
			readonly IsHD?: boolean;
			IsShortcut?: boolean;
			/**
			 * Gets or sets the remote trailers.
			 */
			RemoteTrailers?: MediaUrl[];
			ShortcutPath?: string;
			Size?: number; // int64
			readonly SupportsExternalTransfer?: boolean;
			Width?: number; // int32
		}
		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */
		export interface BaseItemDto {
			/**
			 * Gets or sets the air days.
			 */
			AirDays?: DayOfWeek[];
			/**
			 * Gets or sets the air time.
			 */
			AirTime?: string;
			AirsAfterSeasonNumber?: number; // int32
			AirsBeforeEpisodeNumber?: number; // int32
			AirsBeforeSeasonNumber?: number; // int32
			/**
			 * Gets or sets the album.
			 */
			Album?: string;
			/**
			 * Gets or sets the album artist.
			 */
			AlbumArtist?: string;
			/**
			 * Gets or sets the album artists.
			 */
			AlbumArtists?: NameGuidPair[];
			/**
			 * Gets or sets the album count.
			 */
			AlbumCount?: number; // int32
			/**
			 * Gets or sets the album id.
			 */
			AlbumId?: string; // uuid
			/**
			 * Gets or sets the album image tag.
			 */
			AlbumPrimaryImageTag?: string;
			Altitude?: number; // double
			Aperture?: number; // double
			ArtistCount?: number; // int32
			/**
			 * Gets or sets the artist items.
			 */
			ArtistItems?: NameGuidPair[];
			/**
			 * Gets or sets the artists.
			 */
			Artists?: string[];
			/**
			 * Gets or sets the aspect ratio.
			 */
			AspectRatio?: string;
			/**
			 * Gets or sets the audio.
			 */
			Audio?: ProgramAudio;
			/**
			 * Gets or sets the backdrop image tags.
			 */
			BackdropImageTags?: string[];
			CameraMake?: string;
			CameraModel?: string;
			CanDelete?: boolean;
			CanDownload?: boolean;
			/**
			 * Gets or sets the channel identifier.
			 */
			ChannelId?: string; // uuid
			ChannelName?: string;
			ChannelNumber?: string;
			/**
			 * Gets or sets the channel primary image tag.
			 */
			ChannelPrimaryImageTag?: string;
			/**
			 * Gets or sets the type of the channel.
			 */
			ChannelType?: /* Enum ChannelType. */ ChannelType;
			/**
			 * Gets or sets the chapters.
			 */
			Chapters?: /* Class ChapterInfo. */ ChapterInfo[];
			/**
			 * Gets or sets the child count.
			 */
			ChildCount?: number; // int32
			/**
			 * Gets or sets the type of the collection.
			 */
			CollectionType?: string;
			/**
			 * Gets or sets the community rating.
			 */
			CommunityRating?: number; // float
			/**
			 * Gets or sets the completion percentage.
			 */
			CompletionPercentage?: number; // double
			Container?: string;
			/**
			 * Gets or sets the critic rating.
			 */
			CriticRating?: number; // float
			/**
			 * Gets or sets the cumulative run time ticks.
			 */
			CumulativeRunTimeTicks?: number; // int64
			/**
			 * Gets or sets the current program.
			 */
			CurrentProgram?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			/**
			 * Gets or sets the custom rating.
			 */
			CustomRating?: string;
			/**
			 * Gets or sets the date created.
			 */
			DateCreated?: string; // date-time
			DateLastMediaAdded?: string; // date-time
			/**
			 * Gets or sets the display order.
			 */
			DisplayOrder?: string;
			/**
			 * Gets or sets the display preferences id.
			 */
			DisplayPreferencesId?: string;
			EnableMediaSourceDisplay?: boolean;
			/**
			 * Gets or sets the end date.
			 */
			EndDate?: string; // date-time
			/**
			 * Gets or sets the episode count.
			 */
			EpisodeCount?: number; // int32
			/**
			 * Gets or sets the episode title.
			 */
			EpisodeTitle?: string;
			/**
			 * Gets or sets the etag.
			 */
			Etag?: string;
			ExposureTime?: number; // double
			/**
			 * Gets or sets the external urls.
			 */
			ExternalUrls?: ExternalUrl[];
			ExtraType?: string;
			FocalLength?: number; // double
			ForcedSortName?: string;
			GenreItems?: NameGuidPair[];
			/**
			 * Gets or sets the genres.
			 */
			Genres?: string[];
			HasSubtitles?: boolean;
			Height?: number; // int32
			/**
			 * Gets or sets the id.
			 */
			Id?: string; // uuid
			/**
			 * Gets or sets the blurhashes for the image tags.
			 * Maps image type to dictionary mapping image tag to blurhash value.
			 */
			ImageBlurHashes?: {
				Art?: {
					[name: string]: string;
				};
				Backdrop?: {
					[name: string]: string;
				};
				Banner?: {
					[name: string]: string;
				};
				Box?: {
					[name: string]: string;
				};
				BoxRear?: {
					[name: string]: string;
				};
				Chapter?: {
					[name: string]: string;
				};
				Disc?: {
					[name: string]: string;
				};
				Logo?: {
					[name: string]: string;
				};
				Menu?: {
					[name: string]: string;
				};
				Primary?: {
					[name: string]: string;
				};
				Profile?: {
					[name: string]: string;
				};
				Screenshot?: {
					[name: string]: string;
				};
				Thumb?: {
					[name: string]: string;
				};
			};
			ImageOrientation?: ImageOrientation;
			/**
			 * Gets or sets the image tags.
			 */
			ImageTags?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the index number.
			 */
			IndexNumber?: number; // int32
			/**
			 * Gets or sets the index number end.
			 */
			IndexNumberEnd?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance is folder.
			 */
			IsFolder?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is HD.
			 */
			IsHD?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is kids.
			 */
			IsKids?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is live.
			 */
			IsLive?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is movie.
			 */
			IsMovie?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is news.
			 */
			IsNews?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is place holder.
			 */
			IsPlaceHolder?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is premiere.
			 */
			IsPremiere?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is repeat.
			 */
			IsRepeat?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is series.
			 */
			IsSeries?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is sports.
			 */
			IsSports?: boolean;
			IsoSpeedRating?: number; // int32
			/**
			 * Gets or sets the type of the iso.
			 */
			IsoType?: /* Enum IsoType. */ IsoType;
			Latitude?: number; // double
			/**
			 * Gets or sets the local trailer count.
			 */
			LocalTrailerCount?: number; // int32
			/**
			 * Gets or sets the type of the location.
			 */
			LocationType?: /* Enum LocationType. */ LocationType;
			/**
			 * Gets or sets a value indicating whether [enable internet providers].
			 */
			LockData?: boolean;
			/**
			 * Gets or sets the locked fields.
			 */
			LockedFields?: /* Enum MetadataFields. */ MetadataField[];
			Longitude?: number; // double
			MediaSourceCount?: number; // int32
			/**
			 * Gets or sets the media versions.
			 */
			MediaSources?: MediaSourceInfo[];
			/**
			 * Gets or sets the media streams.
			 */
			MediaStreams?: /* Class MediaStream. */ MediaStream[];
			/**
			 * Gets or sets the type of the media.
			 */
			MediaType?: string;
			/**
			 * Gets or sets the movie count.
			 */
			MovieCount?: number; // int32
			/**
			 * Gets or sets the music video count.
			 */
			MusicVideoCount?: number; // int32
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the number.
			 */
			Number?: string;
			/**
			 * Gets or sets the official rating.
			 */
			OfficialRating?: string;
			OriginalTitle?: string;
			/**
			 * Gets or sets the overview.
			 */
			Overview?: string;
			/**
			 * Gets or sets the parent art image tag.
			 */
			ParentArtImageTag?: string;
			/**
			 * If the item does not have a art, this will hold the Id of the Parent that has one.
			 */
			ParentArtItemId?: string;
			/**
			 * Gets or sets the parent backdrop image tags.
			 */
			ParentBackdropImageTags?: string[];
			/**
			 * If the item does not have any backdrops, this will hold the Id of the Parent that has one.
			 */
			ParentBackdropItemId?: string;
			/**
			 * Gets or sets the parent id.
			 */
			ParentId?: string; // uuid
			/**
			 * Gets or sets the parent index number.
			 */
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the parent logo image tag.
			 */
			ParentLogoImageTag?: string;
			/**
			 * If the item does not have a logo, this will hold the Id of the Parent that has one.
			 */
			ParentLogoItemId?: string;
			/**
			 * Gets or sets the parent primary image item identifier.
			 */
			ParentPrimaryImageItemId?: string;
			/**
			 * Gets or sets the parent primary image tag.
			 */
			ParentPrimaryImageTag?: string;
			/**
			 * Gets or sets the parent thumb image tag.
			 */
			ParentThumbImageTag?: string;
			/**
			 * Gets or sets the parent thumb item id.
			 */
			ParentThumbItemId?: string;
			/**
			 * Gets or sets the part count.
			 */
			PartCount?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			/**
			 * Gets or sets the people.
			 */
			People?: /* This is used by the api to get information about a Person within a BaseItem. */ BaseItemPerson[];
			/**
			 * Gets or sets the play access.
			 */
			PlayAccess?: PlayAccess;
			/**
			 * Gets or sets the playlist item identifier.
			 */
			PlaylistItemId?: string;
			PreferredMetadataCountryCode?: string;
			PreferredMetadataLanguage?: string;
			/**
			 * Gets or sets the premiere date.
			 */
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the primary image aspect ratio, after image enhancements.
			 */
			PrimaryImageAspectRatio?: number; // double
			ProductionLocations?: string[];
			/**
			 * Gets or sets the production year.
			 */
			ProductionYear?: number; // int32
			ProgramCount?: number; // int32
			/**
			 * Gets or sets the program identifier.
			 */
			ProgramId?: string;
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the recursive item count.
			 */
			RecursiveItemCount?: number; // int32
			/**
			 * Gets or sets the trailer urls.
			 */
			RemoteTrailers?: MediaUrl[];
			/**
			 * Gets or sets the run time ticks.
			 */
			RunTimeTicks?: number; // int64
			/**
			 * Gets or sets the screenshot image tags.
			 */
			ScreenshotImageTags?: string[];
			/**
			 * Gets or sets the season identifier.
			 */
			SeasonId?: string; // uuid
			/**
			 * Gets or sets the name of the season.
			 */
			SeasonName?: string;
			/**
			 * Gets or sets the series count.
			 */
			SeriesCount?: number; // int32
			/**
			 * Gets or sets the series id.
			 */
			SeriesId?: string; // uuid
			/**
			 * Gets or sets the name of the series.
			 */
			SeriesName?: string;
			/**
			 * Gets or sets the series primary image tag.
			 */
			SeriesPrimaryImageTag?: string;
			/**
			 * Gets or sets the series studio.
			 */
			SeriesStudio?: string;
			/**
			 * Gets or sets the series thumb image tag.
			 */
			SeriesThumbImageTag?: string;
			/**
			 * Gets or sets the series timer identifier.
			 */
			SeriesTimerId?: string;
			/**
			 * Gets or sets the server identifier.
			 */
			ServerId?: string;
			ShutterSpeed?: number; // double
			Software?: string;
			/**
			 * Gets or sets the song count.
			 */
			SongCount?: number; // int32
			/**
			 * Gets or sets the name of the sort.
			 */
			SortName?: string;
			/**
			 * Gets or sets the type of the source.
			 */
			SourceType?: string;
			/**
			 * Gets or sets the special feature count.
			 */
			SpecialFeatureCount?: number; // int32
			/**
			 * The start date of the recording, in UTC.
			 */
			StartDate?: string; // date-time
			/**
			 * Gets or sets the status.
			 */
			Status?: string;
			/**
			 * Gets or sets the studios.
			 */
			Studios?: NameGuidPair[];
			/**
			 * Gets or sets a value indicating whether [supports synchronize].
			 */
			SupportsSync?: boolean;
			/**
			 * Gets or sets the taglines.
			 */
			Taglines?: string[];
			/**
			 * Gets or sets the tags.
			 */
			Tags?: string[];
			/**
			 * Gets or sets the timer identifier.
			 */
			TimerId?: string;
			/**
			 * Gets or sets the trailer count.
			 */
			TrailerCount?: number; // int32
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
			/**
			 * User data for this item based on the user it's being requested for.
			 */
			UserData?: /* Class UserItemDataDto. */ UserItemDataDto;
			/**
			 * Gets or sets the video3 D format.
			 */
			Video3DFormat?: Video3DFormat;
			/**
			 * Gets or sets the type of the video.
			 */
			VideoType?: /* Enum VideoType. */ VideoType;
			Width?: number; // int32
		}
		export interface BaseItemDtoQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		/**
		 * This is used by the api to get information about a Person within a BaseItem.
		 */
		export interface BaseItemPerson {
			/**
			 * Gets or sets the identifier.
			 */
			Id?: string;
			/**
			 * Gets or sets the primary image blurhash.
			 */
			ImageBlurHashes?: {
				Art?: {
					[name: string]: string;
				};
				Backdrop?: {
					[name: string]: string;
				};
				Banner?: {
					[name: string]: string;
				};
				Box?: {
					[name: string]: string;
				};
				BoxRear?: {
					[name: string]: string;
				};
				Chapter?: {
					[name: string]: string;
				};
				Disc?: {
					[name: string]: string;
				};
				Logo?: {
					[name: string]: string;
				};
				Menu?: {
					[name: string]: string;
				};
				Primary?: {
					[name: string]: string;
				};
				Profile?: {
					[name: string]: string;
				};
				Screenshot?: {
					[name: string]: string;
				};
				Thumb?: {
					[name: string]: string;
				};
			};
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the primary image tag.
			 */
			PrimaryImageTag?: string;
			/**
			 * Gets or sets the role.
			 */
			Role?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
		}
		/**
		 * Class BasePluginConfiguration.
		 */
		export interface BasePluginConfiguration {}
		export interface BookInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			SeriesName?: string;
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface BookInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: BookInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface BoxSetInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface BoxSetInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: BoxSetInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface BrandingOptions {
			/**
			 * Gets or sets the custom CSS.
			 */
			CustomCss?: string;
			/**
			 * Gets or sets the login disclaimer.
			 */
			LoginDisclaimer?: string;
		}
		/**
		 * Class BufferRequestDto.
		 */
		export interface BufferRequestDto {
			/**
			 * Gets or sets a value indicating whether the client playback is unpaused.
			 */
			IsPlaying?: boolean;
			/**
			 * Gets or sets the playlist item identifier of the playing item.
			 */
			PlaylistItemId?: string; // uuid
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets when the request has been made by the client.
			 */
			When?: string; // date-time
		}
		export interface ChannelFeatures {
			/**
			 * Gets or sets the automatic refresh levels.
			 */
			AutoRefreshLevels?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance can filter.
			 */
			CanFilter?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance can search.
			 */
			CanSearch?: boolean;
			/**
			 * Gets or sets the content types.
			 */
			ContentTypes?: ChannelMediaContentType[];
			/**
			 * Gets or sets the default sort orders.
			 */
			DefaultSortFields?: ChannelItemSortField[];
			/**
			 * Gets or sets the identifier.
			 */
			Id?: string;
			/**
			 * Represents the maximum number of records the channel allows retrieving at a time.
			 */
			MaxPageSize?: number; // int32
			/**
			 * Gets or sets the media types.
			 */
			MediaTypes?: ChannelMediaType[];
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets a value indicating whether [supports content downloading].
			 */
			SupportsContentDownloading?: boolean;
			/**
			 * Gets or sets a value indicating whether [supports latest media].
			 */
			SupportsLatestMedia?: boolean;
			/**
			 * Indicates if a sort ascending/descending toggle is supported or not.
			 */
			SupportsSortOrderToggle?: boolean;
		}
		export type ChannelItemSortField =
			| 'Name'
			| 'CommunityRating'
			| 'PremiereDate'
			| 'DateCreated'
			| 'Runtime'
			| 'PlayCount'
			| 'CommunityPlayCount';
		/**
		 * Channel mapping options dto.
		 */
		export interface ChannelMappingOptionsDto {
			/**
			 * Gets or sets list of mappings.
			 */
			Mappings?: NameValuePair[];
			/**
			 * Gets or sets list of provider channels.
			 */
			ProviderChannels?: NameIdPair[];
			/**
			 * Gets or sets provider name.
			 */
			ProviderName?: string;
			/**
			 * Gets or sets list of tuner channels.
			 */
			TunerChannels?: TunerChannelMapping[];
		}
		export type ChannelMediaContentType =
			| 'Clip'
			| 'Podcast'
			| 'Trailer'
			| 'Movie'
			| 'Episode'
			| 'Song'
			| 'MovieExtra'
			| 'TvExtra';
		export type ChannelMediaType = 'Audio' | 'Video' | 'Photo';
		/**
		 * Enum ChannelType.
		 */
		export type ChannelType = 'TV' | 'Radio';
		/**
		 * Class ChapterInfo.
		 */
		export interface ChapterInfo {
			ImageDateModified?: string; // date-time
			/**
			 * Gets or sets the image path.
			 */
			ImagePath?: string;
			ImageTag?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the start position ticks.
			 */
			StartPositionTicks?: number; // int64
		}
		export interface ClientCapabilities {
			AppStoreUrl?: string;
			/**
			 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
			 */
			DeviceProfile?: /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ DeviceProfile;
			IconUrl?: string;
			MessageCallbackUrl?: string;
			PlayableMediaTypes?: string[];
			SupportedCommands?: /* This exists simply to identify a set of known commands. */ GeneralCommandType[];
			SupportsContentUploading?: boolean;
			SupportsMediaControl?: boolean;
			SupportsPersistentIdentifier?: boolean;
			SupportsSync?: boolean;
		}
		/**
		 * Client capabilities dto.
		 */
		export interface ClientCapabilitiesDto {
			/**
			 * Gets or sets the app store url.
			 */
			AppStoreUrl?: string;
			/**
			 * Gets or sets the device profile.
			 */
			DeviceProfile?: /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ DeviceProfile;
			/**
			 * Gets or sets the icon url.
			 */
			IconUrl?: string;
			/**
			 * Gets or sets the message callback url.
			 */
			MessageCallbackUrl?: string;
			/**
			 * Gets or sets the list of playable media types.
			 */
			PlayableMediaTypes?: string[];
			/**
			 * Gets or sets the list of supported commands.
			 */
			SupportedCommands?: /* This exists simply to identify a set of known commands. */ GeneralCommandType[];
			/**
			 * Gets or sets a value indicating whether session supports content uploading.
			 */
			SupportsContentUploading?: boolean;
			/**
			 * Gets or sets a value indicating whether session supports media control.
			 */
			SupportsMediaControl?: boolean;
			/**
			 * Gets or sets a value indicating whether session supports a persistent identifier.
			 */
			SupportsPersistentIdentifier?: boolean;
			/**
			 * Gets or sets a value indicating whether session supports sync.
			 */
			SupportsSync?: boolean;
		}
		export interface CodecProfile {
			ApplyConditions?: ProfileCondition[];
			Codec?: string;
			Conditions?: ProfileCondition[];
			Container?: string;
			Type?: CodecType;
		}
		export type CodecType = 'Video' | 'VideoAudio' | 'Audio';
		export interface CollectionCreationResult {
			Id?: string; // uuid
		}
		export type CollectionTypeOptions =
			| 'Movies'
			| 'TvShows'
			| 'Music'
			| 'MusicVideos'
			| 'HomeVideos'
			| 'BoxSets'
			| 'Books'
			| 'Mixed';
		/**
		 * The configuration page info.
		 */
		export interface ConfigurationPageInfo {
			/**
			 * Gets or sets the type of the configuration page.
			 */
			ConfigurationPageType?: /* Enum ConfigurationPageType. */ ConfigurationPageType;
			/**
			 * Gets or sets the display name.
			 */
			DisplayName?: string;
			/**
			 * Gets or sets a value indicating whether the configurations page is enabled in the main menu.
			 */
			EnableInMainMenu?: boolean;
			/**
			 * Gets or sets the menu icon.
			 */
			MenuIcon?: string;
			/**
			 * Gets or sets the menu section.
			 */
			MenuSection?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the plugin id.
			 */
			PluginId?: string; // uuid
		}
		/**
		 * Enum ConfigurationPageType.
		 */
		export type ConfigurationPageType = 'PluginConfiguration' | 'None';
		export interface ContainerProfile {
			Conditions?: ProfileCondition[];
			Container?: string;
			Type?: DlnaProfileType;
		}
		export interface ControlResponse {
			readonly Headers?: {
				[name: string]: string;
			};
			IsSuccessful?: boolean;
			Xml?: string;
		}
		/**
		 * Class CountryInfo.
		 */
		export interface CountryInfo {
			/**
			 * Gets or sets the display name.
			 */
			DisplayName?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the name of the three letter ISO region.
			 */
			ThreeLetterISORegionName?: string;
			/**
			 * Gets or sets the name of the two letter ISO region.
			 */
			TwoLetterISORegionName?: string;
		}
		/**
		 * Create new playlist dto.
		 */
		export interface CreatePlaylistDto {
			/**
			 * Gets or sets item ids to add to the playlist.
			 */
			Ids?: string /* uuid */[];
			/**
			 * Gets or sets the media type.
			 */
			MediaType?: string;
			/**
			 * Gets or sets the name of the new playlist.
			 */
			Name?: string;
			/**
			 * Gets or sets the user id.
			 */
			UserId?: string; // uuid
		}
		/**
		 * The create user by name request body.
		 */
		export interface CreateUserByName {
			/**
			 * Gets or sets the username.
			 */
			Name?: string;
			/**
			 * Gets or sets the password.
			 */
			Password?: string;
		}
		/**
		 * Class CultureDto.
		 */
		export interface CultureDto {
			/**
			 * Gets or sets the display name.
			 */
			DisplayName?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the name of the three letter ISO language.
			 */
			readonly ThreeLetterISOLanguageName?: string;
			ThreeLetterISOLanguageNames?: string[];
			/**
			 * Gets or sets the name of the two letter ISO language.
			 */
			TwoLetterISOLanguageName?: string;
		}
		export type DayOfWeek =
			| 'Sunday'
			| 'Monday'
			| 'Tuesday'
			| 'Wednesday'
			| 'Thursday'
			| 'Friday'
			| 'Saturday';
		export type DayPattern = 'Daily' | 'Weekdays' | 'Weekends';
		/**
		 * Default directory browser info.
		 */
		export interface DefaultDirectoryBrowserInfoDto {
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
		}
		export interface DeviceIdentification {
			/**
			 * Gets or sets the name of the friendly.
			 */
			FriendlyName?: string;
			/**
			 * Gets or sets the headers.
			 */
			Headers?: HttpHeaderInfo[];
			/**
			 * Gets or sets the manufacturer.
			 */
			Manufacturer?: string;
			/**
			 * Gets or sets the manufacturer URL.
			 */
			ManufacturerUrl?: string;
			/**
			 * Gets or sets the model description.
			 */
			ModelDescription?: string;
			/**
			 * Gets or sets the name of the model.
			 */
			ModelName?: string;
			/**
			 * Gets or sets the model number.
			 */
			ModelNumber?: string;
			/**
			 * Gets or sets the model URL.
			 */
			ModelUrl?: string;
			/**
			 * Gets or sets the serial number.
			 */
			SerialNumber?: string;
		}
		export interface DeviceInfo {
			/**
			 * Gets or sets the name of the application.
			 */
			AppName?: string;
			/**
			 * Gets or sets the application version.
			 */
			AppVersion?: string;
			/**
			 * Gets or sets the capabilities.
			 */
			Capabilities?: ClientCapabilities;
			/**
			 * Gets or sets the date last modified.
			 */
			DateLastActivity?: string; // date-time
			IconUrl?: string;
			/**
			 * Gets or sets the identifier.
			 */
			Id?: string;
			/**
			 * Gets or sets the last user identifier.
			 */
			LastUserId?: string; // uuid
			/**
			 * Gets or sets the last name of the user.
			 */
			LastUserName?: string;
			Name?: string;
		}
		export interface DeviceInfoQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: DeviceInfo[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface DeviceOptions {
			CustomName?: string;
		}
		/**
		 * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
		 */
		export interface DeviceProfile {
			/**
			 * Gets or sets the AlbumArtPn.
			 */
			AlbumArtPn?: string;
			/**
			 * Gets or sets the CodecProfiles.
			 */
			CodecProfiles?: CodecProfile[];
			/**
			 * Gets or sets the ContainerProfiles.
			 */
			ContainerProfiles?: ContainerProfile[];
			/**
			 * Gets or sets the direct play profiles.
			 */
			DirectPlayProfiles?: DirectPlayProfile[];
			/**
			 * Gets or sets a value indicating whether EnableAlbumArtInDidl.
			 */
			EnableAlbumArtInDidl?: boolean;
			/**
			 * Gets or sets a value indicating whether EnableMSMediaReceiverRegistrar.
			 */
			EnableMSMediaReceiverRegistrar?: boolean;
			/**
			 * Gets or sets a value indicating whether EnableSingleAlbumArtLimit.
			 */
			EnableSingleAlbumArtLimit?: boolean;
			/**
			 * Gets or sets a value indicating whether EnableSingleSubtitleLimit.
			 */
			EnableSingleSubtitleLimit?: boolean;
			/**
			 * Gets or sets the FriendlyName.
			 */
			FriendlyName?: string;
			/**
			 * Gets or sets the Id.
			 */
			Id?: string;
			/**
			 * Gets or sets the Identification.
			 */
			Identification?: DeviceIdentification;
			/**
			 * Gets or sets a value indicating whether IgnoreTranscodeByteRangeRequests.
			 */
			IgnoreTranscodeByteRangeRequests?: boolean;
			/**
			 * Gets or sets the Manufacturer.
			 */
			Manufacturer?: string;
			/**
			 * Gets or sets the ManufacturerUrl.
			 */
			ManufacturerUrl?: string;
			/**
			 * Gets or sets the MaxAlbumArtHeight.
			 */
			MaxAlbumArtHeight?: number; // int32
			/**
			 * Gets or sets the MaxAlbumArtWidth.
			 */
			MaxAlbumArtWidth?: number; // int32
			/**
			 * Gets or sets the MaxIconHeight.
			 */
			MaxIconHeight?: number; // int32
			/**
			 * Gets or sets the MaxIconWidth.
			 */
			MaxIconWidth?: number; // int32
			/**
			 * Gets or sets the MaxStaticBitrate.
			 */
			MaxStaticBitrate?: number; // int32
			/**
			 * Gets or sets the MaxStaticMusicBitrate.
			 */
			MaxStaticMusicBitrate?: number; // int32
			/**
			 * Gets or sets the MaxStreamingBitrate.
			 */
			MaxStreamingBitrate?: number; // int32
			/**
			 * Gets or sets the ModelDescription.
			 */
			ModelDescription?: string;
			/**
			 * Gets or sets the ModelName.
			 */
			ModelName?: string;
			/**
			 * Gets or sets the ModelNumber.
			 */
			ModelNumber?: string;
			/**
			 * Gets or sets the ModelUrl.
			 */
			ModelUrl?: string;
			/**
			 * Gets or sets the MusicStreamingTranscodingBitrate.
			 */
			MusicStreamingTranscodingBitrate?: number; // int32
			/**
			 * Gets or sets the Name.
			 */
			Name?: string;
			/**
			 * Gets or sets the ProtocolInfo.
			 */
			ProtocolInfo?: string;
			/**
			 * Gets or sets a value indicating whether RequiresPlainFolders.
			 */
			RequiresPlainFolders?: boolean;
			/**
			 * Gets or sets a value indicating whether RequiresPlainVideoItems.
			 */
			RequiresPlainVideoItems?: boolean;
			/**
			 * Gets or sets the ResponseProfiles.
			 */
			ResponseProfiles?: ResponseProfile[];
			/**
			 * Gets or sets the SerialNumber.
			 */
			SerialNumber?: string;
			/**
			 * Gets or sets the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace.
			 */
			SonyAggregationFlags?: string;
			/**
			 * Gets or sets the SubtitleProfiles.
			 */
			SubtitleProfiles?: SubtitleProfile[];
			/**
			 * Gets or sets the SupportedMediaTypes.
			 */
			SupportedMediaTypes?: string;
			/**
			 * Gets or sets the TimelineOffsetSeconds.
			 */
			TimelineOffsetSeconds?: number; // int32
			/**
			 * Gets or sets the transcoding profiles.
			 */
			TranscodingProfiles?: TranscodingProfile[];
			/**
			 * Gets or sets the UserId.
			 */
			UserId?: string;
			/**
			 * Gets or sets the XmlRootAttributes.
			 */
			XmlRootAttributes?: /* Defines the MediaBrowser.Model.Dlna.XmlAttribute. */ XmlAttribute[];
		}
		export interface DeviceProfileInfo {
			/**
			 * Gets or sets the identifier.
			 */
			Id?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: DeviceProfileType;
		}
		export type DeviceProfileType = 'System' | 'User';
		export interface DirectPlayProfile {
			AudioCodec?: string;
			Container?: string;
			Type?: DlnaProfileType;
			VideoCodec?: string;
		}
		/**
		 * Defines the display preferences for any item that supports them (usually Folders).
		 */
		export interface DisplayPreferencesDto {
			/**
			 * Gets or sets the client.
			 */
			Client?: string;
			/**
			 * Gets or sets the custom prefs.
			 */
			CustomPrefs?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the user id.
			 */
			Id?: string;
			/**
			 * Gets or sets the index by.
			 */
			IndexBy?: string;
			/**
			 * Gets or sets the height of the primary image.
			 */
			PrimaryImageHeight?: number; // int32
			/**
			 * Gets or sets the width of the primary image.
			 */
			PrimaryImageWidth?: number; // int32
			/**
			 * Gets or sets a value indicating whether [remember indexing].
			 */
			RememberIndexing?: boolean;
			/**
			 * Gets or sets a value indicating whether [remember sorting].
			 */
			RememberSorting?: boolean;
			/**
			 * An enum representing the axis that should be scrolled.
			 */
			ScrollDirection?: /* An enum representing the axis that should be scrolled. */ ScrollDirection;
			/**
			 * Gets or sets a value indicating whether to show backdrops on this item.
			 */
			ShowBackdrop?: boolean;
			/**
			 * Gets or sets a value indicating whether [show sidebar].
			 */
			ShowSidebar?: boolean;
			/**
			 * Gets or sets the sort by.
			 */
			SortBy?: string;
			/**
			 * An enum representing the sorting order.
			 */
			SortOrder?: /* An enum representing the sorting order. */ SortOrder;
			/**
			 * Gets or sets the type of the view.
			 */
			ViewType?: string;
		}
		export type DlnaProfileType = 'Audio' | 'Video' | 'Photo';
		/**
		 * An enum that represents a day of the week, weekdays, weekends, or all days.
		 */
		export type DynamicDayOfWeek =
			| 'Sunday'
			| 'Monday'
			| 'Tuesday'
			| 'Wednesday'
			| 'Thursday'
			| 'Friday'
			| 'Saturday'
			| 'Everyday'
			| 'Weekday'
			| 'Weekend';
		export type EncodingContext = 'Streaming' | 'Static';
		export interface EndPointInfo {
			IsInNetwork?: boolean;
			IsLocal?: boolean;
		}
		/**
		 * Represents the external id information for serialization to the client.
		 */
		export interface ExternalIdInfo {
			/**
			 * Gets or sets the unique key for this id. This key should be unique across all providers.
			 */
			Key?: string;
			/**
			 * Gets or sets the display name of the external id provider (IE: IMDB, MusicBrainz, etc).
			 */
			Name?: string;
			/**
			 * Gets or sets the specific media type for this id. This is used to distinguish between the different
			 * external id types for providers with multiple ids.
			 * A null value indicates there is no specific media type associated with the external id, or this is the
			 * default id for the external provider so there is no need to specify a type.
			 */
			Type?: /* The specific media type of an MediaBrowser.Model.Providers.ExternalIdInfo. */ ExternalIdMediaType;
			/**
			 * Gets or sets the URL format string.
			 */
			UrlFormatString?: string;
		}
		/**
		 * The specific media type of an MediaBrowser.Model.Providers.ExternalIdInfo.
		 */
		export type ExternalIdMediaType =
			| 'Album'
			| 'AlbumArtist'
			| 'Artist'
			| 'BoxSet'
			| 'Episode'
			| 'Movie'
			| 'OtherArtist'
			| 'Person'
			| 'ReleaseGroup'
			| 'Season'
			| 'Series'
			| 'Track';
		export interface ExternalUrl {
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the type of the item.
			 */
			Url?: string;
		}
		/**
		 * Enum describing the location of the FFmpeg tool.
		 */
		export type FFmpegLocation = 'NotFound' | 'SetByArgument' | 'Custom' | 'System';
		/**
		 * Class FileSystemEntryInfo.
		 */
		export interface FileSystemEntryInfo {
			/**
			 * Gets the name.
			 */
			readonly Name?: string;
			/**
			 * Gets the path.
			 */
			readonly Path?: string;
			/**
			 * Gets the type.
			 */
			readonly Type?: /* Enum FileSystemEntryType. */ FileSystemEntryType;
		}
		/**
		 * Enum FileSystemEntryType.
		 */
		export type FileSystemEntryType = 'File' | 'Directory' | 'NetworkComputer' | 'NetworkShare';
		/**
		 * Class FontFile.
		 */
		export interface FontFile {
			/**
			 * Gets or sets the date created.
			 */
			DateCreated?: string; // date-time
			/**
			 * Gets or sets the date modified.
			 */
			DateModified?: string; // date-time
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the size.
			 */
			Size?: number; // int64
		}
		export type ForgotPasswordAction = 'ContactAdmin' | 'PinCode' | 'InNetworkRequired';
		/**
		 * Forgot Password request body DTO.
		 */
		export interface ForgotPasswordDto {
			/**
			 * Gets or sets the entered username to have its password reset.
			 */
			EnteredUsername: string;
		}
		/**
		 * Forgot Password Pin enter request body DTO.
		 */
		export interface ForgotPasswordPinDto {
			/**
			 * Gets or sets the entered pin to have the password reset.
			 */
			Pin: string;
		}
		export interface ForgotPasswordResult {
			/**
			 * Gets or sets the action.
			 */
			Action?: ForgotPasswordAction;
			/**
			 * Gets or sets the pin expiration date.
			 */
			PinExpirationDate?: string; // date-time
			/**
			 * Gets or sets the pin file.
			 */
			PinFile?: string;
		}
		export interface GeneralCommand {
			Arguments?: {
				[name: string]: string;
			};
			ControllingUserId?: string; // uuid
			/**
			 * This exists simply to identify a set of known commands.
			 */
			Name?: /* This exists simply to identify a set of known commands. */ GeneralCommandType;
		}
		/**
		 * This exists simply to identify a set of known commands.
		 */
		export type GeneralCommandType =
			| 'MoveUp'
			| 'MoveDown'
			| 'MoveLeft'
			| 'MoveRight'
			| 'PageUp'
			| 'PageDown'
			| 'PreviousLetter'
			| 'NextLetter'
			| 'ToggleOsd'
			| 'ToggleContextMenu'
			| 'Select'
			| 'Back'
			| 'TakeScreenshot'
			| 'SendKey'
			| 'SendString'
			| 'GoHome'
			| 'GoToSettings'
			| 'VolumeUp'
			| 'VolumeDown'
			| 'Mute'
			| 'Unmute'
			| 'ToggleMute'
			| 'SetVolume'
			| 'SetAudioStreamIndex'
			| 'SetSubtitleStreamIndex'
			| 'ToggleFullscreen'
			| 'DisplayContent'
			| 'GoToSearch'
			| 'DisplayMessage'
			| 'SetRepeatMode'
			| 'ChannelUp'
			| 'ChannelDown'
			| 'Guide'
			| 'ToggleStats'
			| 'PlayMediaSource'
			| 'PlayTrailers'
			| 'SetShuffleQueue'
			| 'PlayState'
			| 'PlayNext'
			| 'ToggleOsdMenu'
			| 'Play';
		/**
		 * Get programs dto.
		 */
		export interface GetProgramsDto {
			/**
			 * Gets or sets the channels to return guide information for.
			 */
			ChannelIds?: string /* uuid */[];
			/**
			 * Gets or sets the image types to include in the output.
			 * Optional.
			 */
			EnableImageTypes?: /* Enum ImageType. */ ImageType[];
			/**
			 * Gets or sets include image information in output.
			 * Optional.
			 */
			EnableImages?: boolean;
			/**
			 * Gets or sets a value indicating whether retrieve total record count.
			 */
			EnableTotalRecordCount?: boolean;
			/**
			 * Gets or sets include user data.
			 * Optional.
			 */
			EnableUserData?: boolean;
			/**
			 * Gets or sets specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
			 * Optional.
			 */
			Fields?: /* Used to control the data that gets attached to DtoBaseItems. */ ItemFields[];
			/**
			 * Gets or sets the genre ids to return guide information for.
			 */
			GenreIds?: string /* uuid */[];
			/**
			 * Gets or sets the genres to return guide information for.
			 */
			Genres?: string[];
			/**
			 * Gets or sets filter by programs that have completed airing, or not.
			 * Optional.
			 */
			HasAired?: boolean;
			/**
			 * Gets or sets the max number of images to return, per image type.
			 * Optional.
			 */
			ImageTypeLimit?: number; // int32
			/**
			 * Gets or sets filter by programs that are currently airing, or not.
			 * Optional.
			 */
			IsAiring?: boolean;
			/**
			 * Gets or sets filter for kids.
			 * Optional.
			 */
			IsKids?: boolean;
			/**
			 * Gets or sets filter for movies.
			 * Optional.
			 */
			IsMovie?: boolean;
			/**
			 * Gets or sets filter for news.
			 * Optional.
			 */
			IsNews?: boolean;
			/**
			 * Gets or sets filter for series.
			 * Optional.
			 */
			IsSeries?: boolean;
			/**
			 * Gets or sets filter for sports.
			 * Optional.
			 */
			IsSports?: boolean;
			/**
			 * Gets or sets filter by library series id.
			 * Optional.
			 */
			LibrarySeriesId?: string; // uuid
			/**
			 * Gets or sets the maximum number of records to return.
			 * Optional.
			 */
			Limit?: number; // int32
			/**
			 * Gets or sets the maximum premiere end date.
			 * Optional.
			 */
			MaxEndDate?: string; // date-time
			/**
			 * Gets or sets the maximum premiere start date.
			 * Optional.
			 */
			MaxStartDate?: string; // date-time
			/**
			 * Gets or sets the minimum premiere end date.
			 * Optional.
			 */
			MinEndDate?: string; // date-time
			/**
			 * Gets or sets the minimum premiere start date.
			 * Optional.
			 */
			MinStartDate?: string; // date-time
			/**
			 * Gets or sets filter by series timer id.
			 * Optional.
			 */
			SeriesTimerId?: string;
			/**
			 * Gets or sets specify one or more sort orders, comma delimited. Options: Name, StartDate.
			 * Optional.
			 */
			SortBy?: string[];
			/**
			 * Gets or sets sort Order - Ascending,Descending.
			 */
			SortOrder?: /* An enum representing the sorting order. */ SortOrder[];
			/**
			 * Gets or sets the record index to start at. All items with a lower index will be dropped from the results.
			 * Optional.
			 */
			StartIndex?: number; // int32
			/**
			 * Gets or sets optional. Filter by user id.
			 */
			UserId?: string; // uuid
		}
		/**
		 * Class GroupInfoDto.
		 */
		export interface GroupInfoDto {
			/**
			 * Gets the group identifier.
			 */
			readonly GroupId?: string; // uuid
			/**
			 * Gets the group name.
			 */
			readonly GroupName?: string;
			/**
			 * Gets the date when this DTO has been created.
			 */
			readonly LastUpdatedAt?: string; // date-time
			/**
			 * Gets the participants.
			 */
			readonly Participants?: string[];
			/**
			 * Gets the group state.
			 */
			readonly State?: /* Enum GroupState. */ GroupStateType;
		}
		/**
		 * Enum GroupQueueMode.
		 */
		export type GroupQueueMode = 'Queue' | 'QueueNext';
		/**
		 * Enum GroupRepeatMode.
		 */
		export type GroupRepeatMode = 'RepeatOne' | 'RepeatAll' | 'RepeatNone';
		/**
		 * Enum GroupShuffleMode.
		 */
		export type GroupShuffleMode = 'Sorted' | 'Shuffle';
		/**
		 * Enum GroupState.
		 */
		export type GroupStateType = 'Idle' | 'Waiting' | 'Paused' | 'Playing';
		/**
		 * Enum GroupUpdateType.
		 */
		export type GroupUpdateType =
			| 'UserJoined'
			| 'UserLeft'
			| 'GroupJoined'
			| 'GroupLeft'
			| 'StateUpdate'
			| 'PlayQueue'
			| 'NotInGroup'
			| 'GroupDoesNotExist'
			| 'CreateGroupDenied'
			| 'JoinGroupDenied'
			| 'LibraryAccessDenied';
		export interface GuideInfo {
			/**
			 * Gets or sets the end date.
			 */
			EndDate?: string; // date-time
			/**
			 * Gets or sets the start date.
			 */
			StartDate?: string; // date-time
		}
		export type HeaderMatchType = 'Equals' | 'Regex' | 'Substring';
		export interface HttpHeaderInfo {
			Match?: HeaderMatchType;
			Name?: string;
			Value?: string;
		}
		/**
		 * Defines the MediaBrowser.Common.Plugins.IPlugin.
		 */
		export interface IPlugin {
			/**
			 * Gets the path to the assembly file.
			 */
			readonly AssemblyFilePath?: string;
			/**
			 * Gets a value indicating whether the plugin can be uninstalled.
			 */
			readonly CanUninstall?: boolean;
			/**
			 * Gets the full path to the data folder, where the plugin can store any miscellaneous files needed.
			 */
			readonly DataFolderPath?: string;
			/**
			 * Gets the Description.
			 */
			readonly Description?: string;
			/**
			 * Gets the unique id.
			 */
			readonly Id?: string; // uuid
			/**
			 * Gets the name of the plugin.
			 */
			readonly Name?: string;
			/**
			 * Gets the plugin version.
			 */
			readonly Version?: Version;
		}
		/**
		 * Class IgnoreWaitRequestDto.
		 */
		export interface IgnoreWaitRequestDto {
			/**
			 * Gets or sets a value indicating whether the client should be ignored.
			 */
			IgnoreWait?: boolean;
		}
		export interface ImageByNameInfo {
			/**
			 * Gets or sets the context.
			 */
			Context?: string;
			/**
			 * Gets or sets the length of the file.
			 */
			FileLength?: number; // int64
			/**
			 * Gets or sets the format.
			 */
			Format?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the theme.
			 */
			Theme?: string;
		}
		/**
		 * Enum ImageOutputFormat.
		 */
		export type ImageFormat = 'Bmp' | 'Gif' | 'Jpg' | 'Png' | 'Webp';
		/**
		 * Class ImageInfo.
		 */
		export interface ImageInfo {
			/**
			 * Gets or sets the blurhash.
			 */
			BlurHash?: string;
			/**
			 * Gets or sets the height.
			 */
			Height?: number; // int32
			/**
			 * Gets or sets the index of the image.
			 */
			ImageIndex?: number; // int32
			/**
			 * Gets or sets the image tag.
			 */
			ImageTag?: string;
			/**
			 * Gets or sets the type of the image.
			 */
			ImageType?: /* Enum ImageType. */ ImageType;
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			/**
			 * Gets or sets the size.
			 */
			Size?: number; // int64
			/**
			 * Gets or sets the width.
			 */
			Width?: number; // int32
		}
		export interface ImageOption {
			/**
			 * Gets or sets the limit.
			 */
			Limit?: number; // int32
			/**
			 * Gets or sets the minimum width.
			 */
			MinWidth?: number; // int32
			/**
			 * Gets or sets the type.
			 */
			Type?: /* Enum ImageType. */ ImageType;
		}
		export type ImageOrientation =
			| 'TopLeft'
			| 'TopRight'
			| 'BottomRight'
			| 'BottomLeft'
			| 'LeftTop'
			| 'RightTop'
			| 'RightBottom'
			| 'LeftBottom';
		/**
		 * Class ImageProviderInfo.
		 */
		export interface ImageProviderInfo {
			/**
			 * Gets the name.
			 */
			readonly Name?: string;
			/**
			 * Gets the supported image types.
			 */
			readonly SupportedImages?: /* Enum ImageType. */ ImageType[];
		}
		export type ImageSavingConvention = 'Legacy' | 'Compatible';
		/**
		 * Enum ImageType.
		 */
		export type ImageType =
			| 'Primary'
			| 'Art'
			| 'Backdrop'
			| 'Banner'
			| 'Logo'
			| 'Thumb'
			| 'Disc'
			| 'Box'
			| 'Screenshot'
			| 'Menu'
			| 'Chapter'
			| 'BoxRear'
			| 'Profile';
		/**
		 * Class InstallationInfo.
		 */
		export interface InstallationInfo {
			/**
			 * Gets or sets the changelog for this version.
			 */
			Changelog?: string;
			/**
			 * Gets or sets a checksum for the binary.
			 */
			Checksum?: string;
			/**
			 * Gets or sets the Id.
			 */
			Guid?: string; // uuid
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets package information for the installation.
			 */
			PackageInfo?: /* Class PackageInfo. */ PackageInfo;
			/**
			 * Gets or sets the source URL.
			 */
			SourceUrl?: string;
			/**
			 * Gets or sets the version.
			 */
			Version?: Version;
		}
		/**
		 * Enum IsoType.
		 */
		export type IsoType = 'Dvd' | 'BluRay';
		/**
		 * Class LibrarySummary.
		 */
		export interface ItemCounts {
			/**
			 * Gets or sets the album count.
			 */
			AlbumCount?: number; // int32
			/**
			 * Gets or sets the artist count.
			 */
			ArtistCount?: number; // int32
			/**
			 * Gets or sets the book count.
			 */
			BookCount?: number; // int32
			/**
			 * Gets or sets the box set count.
			 */
			BoxSetCount?: number; // int32
			/**
			 * Gets or sets the episode count.
			 */
			EpisodeCount?: number; // int32
			/**
			 * Gets or sets the item count.
			 */
			ItemCount?: number; // int32
			/**
			 * Gets or sets the movie count.
			 */
			MovieCount?: number; // int32
			/**
			 * Gets or sets the music video count.
			 */
			MusicVideoCount?: number; // int32
			/**
			 * Gets or sets the program count.
			 */
			ProgramCount?: number; // int32
			/**
			 * Gets or sets the series count.
			 */
			SeriesCount?: number; // int32
			/**
			 * Gets or sets the song count.
			 */
			SongCount?: number; // int32
			/**
			 * Gets or sets the trailer count.
			 */
			TrailerCount?: number; // int32
		}
		/**
		 * Used to control the data that gets attached to DtoBaseItems.
		 */
		export type ItemFields =
			| 'AirTime'
			| 'CanDelete'
			| 'CanDownload'
			| 'ChannelInfo'
			| 'Chapters'
			| 'ChildCount'
			| 'CumulativeRunTimeTicks'
			| 'CustomRating'
			| 'DateCreated'
			| 'DateLastMediaAdded'
			| 'DisplayPreferencesId'
			| 'Etag'
			| 'ExternalUrls'
			| 'Genres'
			| 'HomePageUrl'
			| 'ItemCounts'
			| 'MediaSourceCount'
			| 'MediaSources'
			| 'OriginalTitle'
			| 'Overview'
			| 'ParentId'
			| 'Path'
			| 'People'
			| 'PlayAccess'
			| 'ProductionLocations'
			| 'ProviderIds'
			| 'PrimaryImageAspectRatio'
			| 'RecursiveItemCount'
			| 'Settings'
			| 'ScreenshotImageTags'
			| 'SeriesPrimaryImage'
			| 'SeriesStudio'
			| 'SortName'
			| 'SpecialEpisodeNumbers'
			| 'Studios'
			| 'BasicSyncInfo'
			| 'SyncInfo'
			| 'Taglines'
			| 'Tags'
			| 'RemoteTrailers'
			| 'MediaStreams'
			| 'SeasonUserData'
			| 'ServiceName'
			| 'ThemeSongIds'
			| 'ThemeVideoIds'
			| 'ExternalEtag'
			| 'PresentationUniqueKey'
			| 'InheritedParentalRatingValue'
			| 'ExternalSeriesId'
			| 'SeriesPresentationUniqueKey'
			| 'DateLastRefreshed'
			| 'DateLastSaved'
			| 'RefreshState'
			| 'ChannelImage'
			| 'EnableMediaSourceDisplay'
			| 'Width'
			| 'Height'
			| 'ExtraIds'
			| 'LocalTrailerCount'
			| 'IsHD'
			| 'SpecialFeatureCount';
		/**
		 * Enum ItemFilter.
		 */
		export type ItemFilter =
			| 'IsFolder'
			| 'IsNotFolder'
			| 'IsUnplayed'
			| 'IsPlayed'
			| 'IsFavorite'
			| 'IsResumable'
			| 'Likes'
			| 'Dislikes'
			| 'IsFavoriteOrLikes';
		/**
		 * Class JoinGroupRequestDto.
		 */
		export interface JoinGroupRequestDto {
			/**
			 * Gets or sets the group identifier.
			 */
			GroupId?: string; // uuid
		}
		export type KeepUntil = 'UntilDeleted' | 'UntilSpaceNeeded' | 'UntilWatched' | 'UntilDate';
		/**
		 * Library option info dto.
		 */
		export interface LibraryOptionInfoDto {
			/**
			 * Gets or sets a value indicating whether default enabled.
			 */
			DefaultEnabled?: boolean;
			/**
			 * Gets or sets name.
			 */
			Name?: string;
		}
		export interface LibraryOptions {
			AutomaticRefreshIntervalDays?: number; // int32
			DisabledLocalMetadataReaders?: string[];
			DisabledSubtitleFetchers?: string[];
			EnableAutomaticSeriesGrouping?: boolean;
			EnableChapterImageExtraction?: boolean;
			EnableEmbeddedEpisodeInfos?: boolean;
			EnableEmbeddedTitles?: boolean;
			EnableInternetProviders?: boolean;
			EnablePhotos?: boolean;
			EnableRealtimeMonitor?: boolean;
			ExtractChapterImagesDuringLibraryScan?: boolean;
			LocalMetadataReaderOrder?: string[];
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			MetadataSavers?: string[];
			PathInfos?: MediaPathInfo[];
			/**
			 * Gets or sets the preferred metadata language.
			 */
			PreferredMetadataLanguage?: string;
			RequirePerfectSubtitleMatch?: boolean;
			SaveLocalMetadata?: boolean;
			SaveSubtitlesWithMedia?: boolean;
			SeasonZeroDisplayName?: string;
			SkipSubtitlesIfAudioTrackMatches?: boolean;
			SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;
			SubtitleDownloadLanguages?: string[];
			SubtitleFetcherOrder?: string[];
			TypeOptions?: TypeOptions[];
		}
		/**
		 * Library options result dto.
		 */
		export interface LibraryOptionsResultDto {
			/**
			 * Gets or sets the metadata readers.
			 */
			MetadataReaders?: /* Library option info dto. */ LibraryOptionInfoDto[];
			/**
			 * Gets or sets the metadata savers.
			 */
			MetadataSavers?: /* Library option info dto. */ LibraryOptionInfoDto[];
			/**
			 * Gets or sets the subtitle fetchers.
			 */
			SubtitleFetchers?: /* Library option info dto. */ LibraryOptionInfoDto[];
			/**
			 * Gets or sets the type options.
			 */
			TypeOptions?: /* Library type options dto. */ LibraryTypeOptionsDto[];
		}
		/**
		 * Library type options dto.
		 */
		export interface LibraryTypeOptionsDto {
			/**
			 * Gets or sets the default image options.
			 */
			DefaultImageOptions?: ImageOption[];
			/**
			 * Gets or sets the image fetchers.
			 */
			ImageFetchers?: /* Library option info dto. */ LibraryOptionInfoDto[];
			/**
			 * Gets or sets the metadata fetchers.
			 */
			MetadataFetchers?: /* Library option info dto. */ LibraryOptionInfoDto[];
			/**
			 * Gets or sets the supported image types.
			 */
			SupportedImageTypes?: /* Enum ImageType. */ ImageType[];
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
		}
		/**
		 * Class LibraryUpdateInfo.
		 */
		export interface LibraryUpdateInfo {
			CollectionFolders?: string[];
			/**
			 * Gets or sets the folders added to.
			 */
			FoldersAddedTo?: string[];
			/**
			 * Gets or sets the folders removed from.
			 */
			FoldersRemovedFrom?: string[];
			readonly IsEmpty?: boolean;
			/**
			 * Gets or sets the items added.
			 */
			ItemsAdded?: string[];
			/**
			 * Gets or sets the items removed.
			 */
			ItemsRemoved?: string[];
			/**
			 * Gets or sets the items updated.
			 */
			ItemsUpdated?: string[];
		}
		export interface ListingsProviderInfo {
			ChannelMappings?: NameValuePair[];
			Country?: string;
			EnableAllTuners?: boolean;
			EnabledTuners?: string[];
			Id?: string;
			KidsCategories?: string[];
			ListingsId?: string;
			MovieCategories?: string[];
			MoviePrefix?: string;
			NewsCategories?: string[];
			Password?: string;
			Path?: string;
			PreferredLanguage?: string;
			SportsCategories?: string[];
			Type?: string;
			UserAgent?: string;
			Username?: string;
			ZipCode?: string;
		}
		export interface LiveStreamResponse {
			readonly MediaSource?: MediaSourceInfo;
		}
		export interface LiveTvInfo {
			/**
			 * Gets or sets the enabled users.
			 */
			EnabledUsers?: string[];
			/**
			 * Gets or sets a value indicating whether this instance is enabled.
			 */
			IsEnabled?: boolean;
			/**
			 * Gets or sets the services.
			 */
			Services?: /* Class ServiceInfo. */ LiveTvServiceInfo[];
		}
		/**
		 * Class ServiceInfo.
		 */
		export interface LiveTvServiceInfo {
			/**
			 * Gets or sets a value indicating whether this instance has update available.
			 */
			HasUpdateAvailable?: boolean;
			/**
			 * Gets or sets the home page URL.
			 */
			HomePageUrl?: string;
			/**
			 * Gets or sets a value indicating whether this instance is visible.
			 */
			IsVisible?: boolean;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the status.
			 */
			Status?: LiveTvServiceStatus;
			/**
			 * Gets or sets the status message.
			 */
			StatusMessage?: string;
			Tuners?: string[];
			/**
			 * Gets or sets the version.
			 */
			Version?: string;
		}
		export type LiveTvServiceStatus = 'Ok' | 'Unavailable';
		export interface LocalizationOption {
			Name?: string;
			Value?: string;
		}
		/**
		 * Enum LocationType.
		 */
		export type LocationType = 'FileSystem' | 'Remote' | 'Virtual' | 'Offline';
		export interface LogFile {
			/**
			 * Gets or sets the date created.
			 */
			DateCreated?: string; // date-time
			/**
			 * Gets or sets the date modified.
			 */
			DateModified?: string; // date-time
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the size.
			 */
			Size?: number; // int64
		}
		export type LogLevel =
			| 'Trace'
			| 'Debug'
			| 'Information'
			| 'Warning'
			| 'Error'
			| 'Critical'
			| 'None';
		/**
		 * Class MediaAttachment.
		 */
		export interface MediaAttachment {
			/**
			 * Gets or sets the codec.
			 */
			Codec?: string;
			/**
			 * Gets or sets the codec tag.
			 */
			CodecTag?: string;
			/**
			 * Gets or sets the comment.
			 */
			Comment?: string;
			/**
			 * Gets or sets the delivery URL.
			 */
			DeliveryUrl?: string;
			/**
			 * Gets or sets the filename.
			 */
			FileName?: string;
			/**
			 * Gets or sets the index.
			 */
			Index?: number; // int32
			/**
			 * Gets or sets the MIME type.
			 */
			MimeType?: string;
		}
		/**
		 * Media Encoder Path Dto.
		 */
		export interface MediaEncoderPathDto {
			/**
			 * Gets or sets media encoder path.
			 */
			Path?: string;
			/**
			 * Gets or sets media encoder path type.
			 */
			PathType?: string;
		}
		/**
		 * Media Path dto.
		 */
		export interface MediaPathDto {
			/**
			 * Gets or sets the name of the library.
			 */
			Name: string;
			/**
			 * Gets or sets the path to add.
			 */
			Path?: string;
			/**
			 * Gets or sets the path info.
			 */
			PathInfo?: MediaPathInfo;
		}
		export interface MediaPathInfo {
			NetworkPath?: string;
			Path?: string;
		}
		export type MediaProtocol = 'File' | 'Http' | 'Rtmp' | 'Rtsp' | 'Udp' | 'Rtp' | 'Ftp';
		export interface MediaSourceInfo {
			AnalyzeDurationMs?: number; // int32
			Bitrate?: number; // int32
			BufferMs?: number; // int32
			Container?: string;
			DefaultAudioStreamIndex?: number; // int32
			DefaultSubtitleStreamIndex?: number; // int32
			ETag?: string;
			EncoderPath?: string;
			EncoderProtocol?: MediaProtocol;
			Formats?: string[];
			GenPtsInput?: boolean;
			Id?: string;
			IgnoreDts?: boolean;
			IgnoreIndex?: boolean;
			IsInfiniteStream?: boolean;
			/**
			 * Differentiate internet url vs local network.
			 */
			IsRemote?: boolean;
			IsoType?: /* Enum IsoType. */ IsoType;
			LiveStreamId?: string;
			MediaAttachments?: /* Class MediaAttachment. */ MediaAttachment[];
			MediaStreams?: /* Class MediaStream. */ MediaStream[];
			Name?: string;
			OpenToken?: string;
			Path?: string;
			Protocol?: MediaProtocol;
			ReadAtNativeFramerate?: boolean;
			RequiredHttpHeaders?: {
				[name: string]: string;
			};
			RequiresClosing?: boolean;
			RequiresLooping?: boolean;
			RequiresOpening?: boolean;
			RunTimeTicks?: number; // int64
			Size?: number; // int64
			SupportsDirectPlay?: boolean;
			SupportsDirectStream?: boolean;
			SupportsProbing?: boolean;
			SupportsTranscoding?: boolean;
			Timestamp?: TransportStreamTimestamp;
			TranscodingContainer?: string;
			TranscodingSubProtocol?: string;
			TranscodingUrl?: string;
			Type?: MediaSourceType;
			Video3DFormat?: Video3DFormat;
			VideoType?: /* Enum VideoType. */ VideoType;
		}
		export type MediaSourceType = 'Default' | 'Grouping' | 'Placeholder';
		/**
		 * Class MediaStream.
		 */
		export interface MediaStream {
			/**
			 * Gets or sets the aspect ratio.
			 */
			AspectRatio?: string;
			/**
			 * Gets or sets the average frame rate.
			 */
			AverageFrameRate?: number; // float
			/**
			 * Gets or sets the bit depth.
			 */
			BitDepth?: number; // int32
			/**
			 * Gets or sets the bit rate.
			 */
			BitRate?: number; // int32
			/**
			 * Gets or sets the channel layout.
			 */
			ChannelLayout?: string;
			/**
			 * Gets or sets the channels.
			 */
			Channels?: number; // int32
			/**
			 * Gets or sets the codec.
			 */
			Codec?: string;
			/**
			 * Gets or sets the codec tag.
			 */
			CodecTag?: string;
			/**
			 * Gets or sets the codec time base.
			 */
			CodecTimeBase?: string;
			/**
			 * Gets or sets the color primaries.
			 */
			ColorPrimaries?: string;
			/**
			 * Gets or sets the color range.
			 */
			ColorRange?: string;
			/**
			 * Gets or sets the color space.
			 */
			ColorSpace?: string;
			/**
			 * Gets or sets the color transfer.
			 */
			ColorTransfer?: string;
			/**
			 * Gets or sets the comment.
			 */
			Comment?: string;
			/**
			 * Gets or sets the method.
			 */
			DeliveryMethod?: SubtitleDeliveryMethod;
			/**
			 * Gets or sets the delivery URL.
			 */
			DeliveryUrl?: string;
			readonly DisplayTitle?: string;
			/**
			 * Gets or sets the height.
			 */
			Height?: number; // int32
			/**
			 * Gets or sets the index.
			 */
			Index?: number; // int32
			IsAVC?: boolean;
			/**
			 * Gets a value indicating whether this instance is anamorphic.
			 */
			IsAnamorphic?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is default.
			 */
			IsDefault?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is external.
			 */
			IsExternal?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is external URL.
			 */
			IsExternalUrl?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is forced.
			 */
			IsForced?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is interlaced.
			 */
			IsInterlaced?: boolean;
			readonly IsTextSubtitleStream?: boolean;
			/**
			 * Gets or sets the language.
			 */
			Language?: string;
			/**
			 * Gets or sets the level.
			 */
			Level?: number; // double
			NalLengthSize?: string;
			/**
			 * Gets or sets the length of the packet.
			 */
			PacketLength?: number; // int32
			/**
			 * Gets or sets the filename.
			 */
			Path?: string;
			/**
			 * Gets or sets the pixel format.
			 */
			PixelFormat?: string;
			/**
			 * Gets or sets the profile.
			 */
			Profile?: string;
			/**
			 * Gets or sets the real frame rate.
			 */
			RealFrameRate?: number; // float
			/**
			 * Gets or sets the reference frames.
			 */
			RefFrames?: number; // int32
			/**
			 * Gets or sets the sample rate.
			 */
			SampleRate?: number; // int32
			/**
			 * Gets or sets the score.
			 */
			Score?: number; // int32
			/**
			 * Gets or sets a value indicating whether [supports external stream].
			 */
			SupportsExternalStream?: boolean;
			/**
			 * Gets or sets the time base.
			 */
			TimeBase?: string;
			/**
			 * Gets or sets the title.
			 */
			Title?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: /* Enum MediaStreamType. */ MediaStreamType;
			/**
			 * Gets or sets the video range.
			 */
			readonly VideoRange?: string;
			/**
			 * Gets or sets the width.
			 */
			Width?: number; // int32
			localizedDefault?: string;
			localizedForced?: string;
			localizedUndefined?: string;
		}
		/**
		 * Enum MediaStreamType.
		 */
		export type MediaStreamType = 'Audio' | 'Video' | 'Subtitle' | 'EmbeddedImage';
		/**
		 * Media Update Info Dto.
		 */
		export interface MediaUpdateInfoDto {
			/**
			 * Gets or sets media path.
			 */
			Path?: string;
			/**
			 * Gets or sets media update type.
			 * Created, Modified, Deleted.
			 */
			UpdateType?: string;
		}
		export interface MediaUrl {
			Name?: string;
			Url?: string;
		}
		export interface MetadataEditorInfo {
			ContentType?: string;
			ContentTypeOptions?: NameValuePair[];
			Countries?: /* Class CountryInfo. */ CountryInfo[];
			Cultures?: /* Class CultureDto. */ CultureDto[];
			ExternalIdInfos?: /* Represents the external id information for serialization to the client. */ ExternalIdInfo[];
			ParentalRatingOptions?: /* Class ParentalRating. */ ParentalRating[];
		}
		/**
		 * Enum MetadataFields.
		 */
		export type MetadataField =
			| 'Cast'
			| 'Genres'
			| 'ProductionLocations'
			| 'Studios'
			| 'Tags'
			| 'Name'
			| 'Overview'
			| 'Runtime'
			| 'OfficialRating';
		/**
		 * Class MetadataOptions.
		 */
		export interface MetadataOptions {
			DisabledImageFetchers?: string[];
			DisabledMetadataFetchers?: string[];
			DisabledMetadataSavers?: string[];
			ImageFetcherOrder?: string[];
			ItemType?: string;
			LocalMetadataReaderOrder?: string[];
			MetadataFetcherOrder?: string[];
		}
		export type MetadataRefreshMode = 'None' | 'ValidationOnly' | 'Default' | 'FullRefresh';
		/**
		 * Class MovePlaylistItemRequestDto.
		 */
		export interface MovePlaylistItemRequestDto {
			/**
			 * Gets or sets the new position.
			 */
			NewIndex?: number; // int32
			/**
			 * Gets or sets the playlist identifier of the item.
			 */
			PlaylistItemId?: string; // uuid
		}
		export interface MovieInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface MovieInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: MovieInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface MusicVideoInfo {
			Artists?: string[];
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface MusicVideoInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: MusicVideoInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface NameGuidPair {
			Id?: string; // uuid
			Name?: string;
		}
		export interface NameIdPair {
			/**
			 * Gets or sets the identifier.
			 */
			Id?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
		}
		export interface NameValuePair {
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the value.
			 */
			Value?: string;
		}
		/**
		 * Class NewGroupRequestDto.
		 */
		export interface NewGroupRequestDto {
			/**
			 * Gets or sets the group name.
			 */
			GroupName?: string;
		}
		/**
		 * Class NextItemRequestDto.
		 */
		export interface NextItemRequestDto {
			/**
			 * Gets or sets the playing item identifier.
			 */
			PlaylistItemId?: string; // uuid
		}
		/**
		 * The notification DTO.
		 */
		export interface NotificationDto {
			/**
			 * Gets or sets the notification date.
			 */
			Date?: string; // date-time
			/**
			 * Gets or sets the notification's description. Defaults to an empty string.
			 */
			Description?: string;
			/**
			 * Gets or sets the notification ID. Defaults to an empty string.
			 */
			Id?: string;
			/**
			 * Gets or sets a value indicating whether the notification has been read. Defaults to false.
			 */
			IsRead?: boolean;
			/**
			 * Gets or sets the notification level.
			 */
			Level?: NotificationLevel;
			/**
			 * Gets or sets the notification's name. Defaults to an empty string.
			 */
			Name?: string;
			/**
			 * Gets or sets the notification's URL. Defaults to an empty string.
			 */
			Url?: string;
			/**
			 * Gets or sets the notification's user ID. Defaults to an empty string.
			 */
			UserId?: string;
		}
		export type NotificationLevel = 'Normal' | 'Warning' | 'Error';
		/**
		 * A list of notifications with the total record count for pagination.
		 */
		export interface NotificationResultDto {
			/**
			 * Gets or sets the current page of notifications.
			 */
			Notifications?: /* The notification DTO. */ NotificationDto[];
			/**
			 * Gets or sets the total number of notifications.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface NotificationTypeInfo {
			Category?: string;
			Enabled?: boolean;
			IsBasedOnUserEvent?: boolean;
			Name?: string;
			Type?: string;
		}
		/**
		 * The notification summary DTO.
		 */
		export interface NotificationsSummaryDto {
			/**
			 * Gets or sets the maximum unread notification level.
			 */
			MaxUnreadNotificationLevel?: NotificationLevel;
			/**
			 * Gets or sets the number of unread notifications.
			 */
			UnreadCount?: number; // int32
		}
		/**
		 * Class GroupUpdate.
		 */
		export interface ObjectGroupUpdate {
			/**
			 * Gets the update data.
			 */
			readonly Data?: null;
			/**
			 * Gets the group identifier.
			 */
			readonly GroupId?: string; // uuid
			/**
			 * Gets the update type.
			 */
			readonly Type?: /* Enum GroupUpdateType. */ GroupUpdateType;
		}
		/**
		 * Open live stream dto.
		 */
		export interface OpenLiveStreamDto {
			/**
			 * Gets or sets the audio stream index.
			 */
			AudioStreamIndex?: number; // int32
			/**
			 * Gets or sets the device profile.
			 */
			DeviceProfile?: /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ DeviceProfile;
			/**
			 * Gets or sets the device play protocols.
			 */
			DirectPlayProtocols?: MediaProtocol[];
			/**
			 * Gets or sets a value indicating whether to enable direct play.
			 */
			EnableDirectPlay?: boolean;
			/**
			 * Gets or sets a value indicating whether to enale direct stream.
			 */
			EnableDirectStream?: boolean;
			/**
			 * Gets or sets the item id.
			 */
			ItemId?: string; // uuid
			/**
			 * Gets or sets the max audio channels.
			 */
			MaxAudioChannels?: number; // int32
			/**
			 * Gets or sets the max streaming bitrate.
			 */
			MaxStreamingBitrate?: number; // int32
			/**
			 * Gets or sets the open token.
			 */
			OpenToken?: string;
			/**
			 * Gets or sets the play session id.
			 */
			PlaySessionId?: string;
			/**
			 * Gets or sets the start time in ticks.
			 */
			StartTimeTicks?: number; // int64
			/**
			 * Gets or sets the subtitle stream index.
			 */
			SubtitleStreamIndex?: number; // int32
			/**
			 * Gets or sets the user id.
			 */
			UserId?: string; // uuid
		}
		/**
		 * Class PackageInfo.
		 */
		export interface PackageInfo {
			/**
			 * Gets or sets the category.
			 */
			category?: string;
			/**
			 * Gets or sets a long description of the plugin containing features or helpful explanations.
			 */
			description?: string;
			/**
			 * Gets or sets the guid of the assembly associated with this plugin.
			 * This is used to identify the proper item for automatic updates.
			 */
			guid?: string;
			/**
			 * Gets or sets the image url for the package.
			 */
			imageUrl?: string;
			/**
			 * Gets or sets the name.
			 */
			name?: string;
			/**
			 * Gets or sets a short overview of what the plugin does.
			 */
			overview?: string;
			/**
			 * Gets or sets the owner.
			 */
			owner?: string;
			/**
			 * Gets or sets the versions.
			 */
			versions?: /* Defines the MediaBrowser.Model.Updates.VersionInfo class. */ VersionInfo[];
		}
		/**
		 * Class ParentalRating.
		 */
		export interface ParentalRating {
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the value.
			 */
			Value?: number; // int32
		}
		/**
		 * Defines the MediaBrowser.Model.Configuration.PathSubstitution.
		 */
		export interface PathSubstitution {
			/**
			 * Gets or sets the value to substitute.
			 */
			From?: string;
			/**
			 * Gets or sets the value to substitution with.
			 */
			To?: string;
		}
		export interface PersonLookupInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface PersonLookupInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: PersonLookupInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export interface PinRedeemResult {
			/**
			 * Gets or sets a value indicating whether this MediaBrowser.Model.Users.PinRedeemResult is success.
			 */
			Success?: boolean;
			/**
			 * Gets or sets the users reset.
			 */
			UsersReset?: string[];
		}
		/**
		 * Class PingRequestDto.
		 */
		export interface PingRequestDto {
			/**
			 * Gets or sets the ping time.
			 */
			Ping?: number; // int64
		}
		export type PlayAccess = 'Full' | 'None';
		/**
		 * Enum PlayCommand.
		 */
		export type PlayCommand =
			| 'PlayNow'
			| 'PlayNext'
			| 'PlayLast'
			| 'PlayInstantMix'
			| 'PlayShuffle';
		export type PlayMethod = 'Transcode' | 'DirectStream' | 'DirectPlay';
		/**
		 * Class PlayRequest.
		 */
		export interface PlayRequest {
			AudioStreamIndex?: number; // int32
			/**
			 * Gets or sets the controlling user identifier.
			 */
			ControllingUserId?: string; // uuid
			/**
			 * Gets or sets the item ids.
			 */
			ItemIds?: string /* uuid */[];
			MediaSourceId?: string;
			/**
			 * Gets or sets the play command.
			 */
			PlayCommand?: /* Enum PlayCommand. */ PlayCommand;
			StartIndex?: number; // int32
			/**
			 * Gets or sets the start position ticks that the first item should be played at.
			 */
			StartPositionTicks?: number; // int64
			SubtitleStreamIndex?: number; // int32
		}
		/**
		 * Class PlayRequestDto.
		 */
		export interface PlayRequestDto {
			/**
			 * Gets or sets the position of the playing item in the queue.
			 */
			PlayingItemPosition?: number; // int32
			/**
			 * Gets or sets the playing queue.
			 */
			PlayingQueue?: string /* uuid */[];
			/**
			 * Gets or sets the start position ticks.
			 */
			StartPositionTicks?: number; // int64
		}
		export type PlaybackErrorCode = 'NotAllowed' | 'NoCompatibleStream' | 'RateLimitExceeded';
		/**
		 * Plabyback info dto.
		 */
		export interface PlaybackInfoDto {
			/**
			 * Gets or sets a value indicating whether to allow audio stream copy.
			 */
			AllowAudioStreamCopy?: boolean;
			/**
			 * Gets or sets a value indicating whether to enable video stream copy.
			 */
			AllowVideoStreamCopy?: boolean;
			/**
			 * Gets or sets the audio stream index.
			 */
			AudioStreamIndex?: number; // int32
			/**
			 * Gets or sets a value indicating whether to auto open the live stream.
			 */
			AutoOpenLiveStream?: boolean;
			/**
			 * Gets or sets the device profile.
			 */
			DeviceProfile?: /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ DeviceProfile;
			/**
			 * Gets or sets a value indicating whether to enable direct play.
			 */
			EnableDirectPlay?: boolean;
			/**
			 * Gets or sets a value indicating whether to enable direct stream.
			 */
			EnableDirectStream?: boolean;
			/**
			 * Gets or sets a value indicating whether to enable transcoding.
			 */
			EnableTranscoding?: boolean;
			/**
			 * Gets or sets the live stream id.
			 */
			LiveStreamId?: string;
			/**
			 * Gets or sets the max audio channels.
			 */
			MaxAudioChannels?: number; // int32
			/**
			 * Gets or sets the max streaming bitrate.
			 */
			MaxStreamingBitrate?: number; // int32
			/**
			 * Gets or sets the media source id.
			 */
			MediaSourceId?: string;
			/**
			 * Gets or sets the start time in ticks.
			 */
			StartTimeTicks?: number; // int64
			/**
			 * Gets or sets the subtitle stream index.
			 */
			SubtitleStreamIndex?: number; // int32
			/**
			 * Gets or sets the playback userId.
			 */
			UserId?: string; // uuid
		}
		/**
		 * Class PlaybackInfoResponse.
		 */
		export interface PlaybackInfoResponse {
			/**
			 * Gets or sets the error code.
			 */
			ErrorCode?: PlaybackErrorCode;
			/**
			 * Gets or sets the media sources.
			 */
			MediaSources?: MediaSourceInfo[];
			/**
			 * Gets or sets the play session identifier.
			 */
			PlaySessionId?: string;
		}
		/**
		 * Class PlaybackProgressInfo.
		 */
		export interface PlaybackProgressInfo {
			AspectRatio?: string;
			/**
			 * Gets or sets the index of the audio stream.
			 */
			AudioStreamIndex?: number; // int32
			Brightness?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance can seek.
			 */
			CanSeek?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is muted.
			 */
			IsMuted?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is paused.
			 */
			IsPaused?: boolean;
			/**
			 * Gets or sets the item.
			 */
			Item?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string; // uuid
			/**
			 * Gets or sets the live stream identifier.
			 */
			LiveStreamId?: string;
			/**
			 * Gets or sets the media version identifier.
			 */
			MediaSourceId?: string;
			NowPlayingQueue?: QueueItem[];
			/**
			 * Gets or sets the play method.
			 */
			PlayMethod?: PlayMethod;
			/**
			 * Gets or sets the play session identifier.
			 */
			PlaySessionId?: string;
			PlaybackStartTimeTicks?: number; // int64
			PlaylistItemId?: string;
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets the repeat mode.
			 */
			RepeatMode?: RepeatMode;
			/**
			 * Gets or sets the session id.
			 */
			SessionId?: string;
			/**
			 * Gets or sets the index of the subtitle stream.
			 */
			SubtitleStreamIndex?: number; // int32
			/**
			 * Gets or sets the volume level.
			 */
			VolumeLevel?: number; // int32
		}
		/**
		 * Class PlaybackStartInfo.
		 */
		export interface PlaybackStartInfo {
			AspectRatio?: string;
			/**
			 * Gets or sets the index of the audio stream.
			 */
			AudioStreamIndex?: number; // int32
			Brightness?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance can seek.
			 */
			CanSeek?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is muted.
			 */
			IsMuted?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is paused.
			 */
			IsPaused?: boolean;
			/**
			 * Gets or sets the item.
			 */
			Item?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string; // uuid
			/**
			 * Gets or sets the live stream identifier.
			 */
			LiveStreamId?: string;
			/**
			 * Gets or sets the media version identifier.
			 */
			MediaSourceId?: string;
			NowPlayingQueue?: QueueItem[];
			/**
			 * Gets or sets the play method.
			 */
			PlayMethod?: PlayMethod;
			/**
			 * Gets or sets the play session identifier.
			 */
			PlaySessionId?: string;
			PlaybackStartTimeTicks?: number; // int64
			PlaylistItemId?: string;
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets the repeat mode.
			 */
			RepeatMode?: RepeatMode;
			/**
			 * Gets or sets the session id.
			 */
			SessionId?: string;
			/**
			 * Gets or sets the index of the subtitle stream.
			 */
			SubtitleStreamIndex?: number; // int32
			/**
			 * Gets or sets the volume level.
			 */
			VolumeLevel?: number; // int32
		}
		/**
		 * Class PlaybackStopInfo.
		 */
		export interface PlaybackStopInfo {
			/**
			 * Gets or sets a value indicating whether this MediaBrowser.Model.Session.PlaybackStopInfo is failed.
			 */
			Failed?: boolean;
			/**
			 * Gets or sets the item.
			 */
			Item?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string; // uuid
			/**
			 * Gets or sets the live stream identifier.
			 */
			LiveStreamId?: string;
			/**
			 * Gets or sets the media version identifier.
			 */
			MediaSourceId?: string;
			NextMediaType?: string;
			NowPlayingQueue?: QueueItem[];
			/**
			 * Gets or sets the play session identifier.
			 */
			PlaySessionId?: string;
			PlaylistItemId?: string;
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets the session id.
			 */
			SessionId?: string;
		}
		export interface PlayerStateInfo {
			/**
			 * Gets or sets the index of the now playing audio stream.
			 */
			AudioStreamIndex?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance can seek.
			 */
			CanSeek?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is muted.
			 */
			IsMuted?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is paused.
			 */
			IsPaused?: boolean;
			/**
			 * Gets or sets the now playing media version identifier.
			 */
			MediaSourceId?: string;
			/**
			 * Gets or sets the play method.
			 */
			PlayMethod?: PlayMethod;
			/**
			 * Gets or sets the now playing position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets the repeat mode.
			 */
			RepeatMode?: RepeatMode;
			/**
			 * Gets or sets the index of the now playing subtitle stream.
			 */
			SubtitleStreamIndex?: number; // int32
			/**
			 * Gets or sets the volume level.
			 */
			VolumeLevel?: number; // int32
		}
		export interface PlaylistCreationResult {
			readonly Id?: string;
		}
		/**
		 * Enum PlaystateCommand.
		 */
		export type PlaystateCommand =
			| 'Stop'
			| 'Pause'
			| 'Unpause'
			| 'NextTrack'
			| 'PreviousTrack'
			| 'Seek'
			| 'Rewind'
			| 'FastForward'
			| 'PlayPause';
		export interface PlaystateRequest {
			/**
			 * Enum PlaystateCommand.
			 */
			Command?: /* Enum PlaystateCommand. */ PlaystateCommand;
			/**
			 * Gets or sets the controlling user identifier.
			 */
			ControllingUserId?: string;
			SeekPositionTicks?: number; // int64
		}
		/**
		 * This is a serializable stub class that is used by the api to provide information about installed plugins.
		 */
		export interface PluginInfo {
			/**
			 * Gets or sets a value indicating whether the plugin can be uninstalled.
			 */
			CanUninstall?: boolean;
			/**
			 * Gets or sets the name of the configuration file.
			 */
			ConfigurationFileName?: string;
			/**
			 * Gets or sets the description.
			 */
			Description?: string;
			/**
			 * Gets or sets a value indicating whether this plugin has a valid image.
			 */
			HasImage?: boolean;
			/**
			 * Gets or sets the unique id.
			 */
			Id?: string; // uuid
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets a value indicating the status of the plugin.
			 */
			Status?: /* Plugin load status. */ PluginStatus;
			/**
			 * Gets or sets the version.
			 */
			Version?: Version;
		}
		/**
		 * Plugin security info.
		 */
		export interface PluginSecurityInfo {
			/**
			 * Gets or sets a value indicating whether is mb supporter.
			 */
			IsMbSupporter?: boolean;
			/**
			 * Gets or sets the supporter key.
			 */
			SupporterKey?: string;
		}
		/**
		 * Plugin load status.
		 */
		export type PluginStatus =
			| 'Active'
			| 'Restart'
			| 'Deleted'
			| 'Superceded'
			| 'Malfunctioned'
			| 'NotSupported'
			| 'Disabled';
		/**
		 * Class PreviousItemRequestDto.
		 */
		export interface PreviousItemRequestDto {
			/**
			 * Gets or sets the playing item identifier.
			 */
			PlaylistItemId?: string; // uuid
		}
		export interface ProblemDetails {
			[name: string]: any;
			detail?: string;
			instance?: string;
			status?: number; // int32
			title?: string;
			type?: string;
		}
		export interface ProfileCondition {
			Condition?: ProfileConditionType;
			IsRequired?: boolean;
			Property?: ProfileConditionValue;
			Value?: string;
		}
		export type ProfileConditionType =
			| 'Equals'
			| 'NotEquals'
			| 'LessThanEqual'
			| 'GreaterThanEqual'
			| 'EqualsAny';
		export type ProfileConditionValue =
			| 'AudioChannels'
			| 'AudioBitrate'
			| 'AudioProfile'
			| 'Width'
			| 'Height'
			| 'Has64BitOffsets'
			| 'PacketLength'
			| 'VideoBitDepth'
			| 'VideoBitrate'
			| 'VideoFramerate'
			| 'VideoLevel'
			| 'VideoProfile'
			| 'VideoTimestamp'
			| 'IsAnamorphic'
			| 'RefFrames'
			| 'NumAudioStreams'
			| 'NumVideoStreams'
			| 'IsSecondaryAudio'
			| 'VideoCodecTag'
			| 'IsAvc'
			| 'IsInterlaced'
			| 'AudioSampleRate'
			| 'AudioBitDepth';
		export type ProgramAudio = 'Mono' | 'Stereo' | 'Dolby' | 'DolbyDigital' | 'Thx' | 'Atmos';
		export interface PublicSystemInfo {
			/**
			 * Gets or sets the id.
			 */
			Id?: string;
			/**
			 * Gets or sets the local address.
			 */
			LocalAddress?: string;
			/**
			 * Gets or sets the operating system.
			 */
			OperatingSystem?: string;
			/**
			 * Gets or sets the product name. This is the AssemblyProduct name.
			 */
			ProductName?: string;
			/**
			 * Gets or sets the name of the server.
			 */
			ServerName?: string;
			/**
			 * Gets or sets a value indicating whether the startup wizard is completed.
			 */
			StartupWizardCompleted?: boolean;
			/**
			 * Gets or sets the server version.
			 */
			Version?: string;
		}
		export interface QueryFilters {
			Genres?: NameGuidPair[];
			Tags?: string[];
		}
		export interface QueryFiltersLegacy {
			Genres?: string[];
			OfficialRatings?: string[];
			Tags?: string[];
			Years?: number /* int32 */[];
		}
		export interface QueueItem {
			Id?: string; // uuid
			PlaylistItemId?: string;
		}
		/**
		 * Class QueueRequestDto.
		 */
		export interface QueueRequestDto {
			/**
			 * Gets or sets the items to enqueue.
			 */
			ItemIds?: string /* uuid */[];
			/**
			 * Gets or sets the mode in which to add the new items.
			 */
			Mode?: /* Enum GroupQueueMode. */ GroupQueueMode;
		}
		/**
		 * The quick connect request body.
		 */
		export interface QuickConnectDto {
			/**
			 * Gets or sets the quick connect token.
			 */
			Token: string;
		}
		/**
		 * Stores the result of an incoming quick connect request.
		 */
		export interface QuickConnectResult {
			/**
			 * Gets a value indicating whether this request is authorized.
			 */
			readonly Authenticated?: boolean;
			/**
			 * Gets or sets the private access token.
			 */
			Authentication?: string;
			/**
			 * Gets or sets the user facing code used so the user can quickly differentiate this request from others.
			 */
			Code?: string;
			/**
			 * Gets or sets the DateTime that this request was created.
			 */
			DateAdded?: string; // date-time
			/**
			 * Gets or sets an error message.
			 */
			Error?: string;
			/**
			 * Gets or sets the secret value used to uniquely identify this request. Can be used to retrieve authentication information.
			 */
			Secret?: string;
		}
		/**
		 * Quick connect state.
		 */
		export type QuickConnectState = 'Unavailable' | 'Available' | 'Active';
		export type RatingType = 'Score' | 'Likes';
		/**
		 * Class ReadyRequest.
		 */
		export interface ReadyRequestDto {
			/**
			 * Gets or sets a value indicating whether the client playback is unpaused.
			 */
			IsPlaying?: boolean;
			/**
			 * Gets or sets the playlist item identifier of the playing item.
			 */
			PlaylistItemId?: string; // uuid
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
			/**
			 * Gets or sets when the request has been made by the client.
			 */
			When?: string; // date-time
		}
		export interface RecommendationDto {
			BaselineItemName?: string;
			CategoryId?: string; // uuid
			Items?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto[];
			RecommendationType?: RecommendationType;
		}
		export type RecommendationType =
			| 'SimilarToRecentlyPlayed'
			| 'SimilarToLikedItem'
			| 'HasDirectorFromRecentlyPlayed'
			| 'HasActorFromRecentlyPlayed'
			| 'HasLikedDirector'
			| 'HasLikedActor';
		export type RecordingStatus =
			| 'New'
			| 'InProgress'
			| 'Completed'
			| 'Cancelled'
			| 'ConflictedOk'
			| 'ConflictedNotOk'
			| 'Error';
		/**
		 * Class RemoteImageInfo.
		 */
		export interface RemoteImageInfo {
			/**
			 * Gets or sets the community rating.
			 */
			CommunityRating?: number; // double
			/**
			 * Gets or sets the height.
			 */
			Height?: number; // int32
			/**
			 * Gets or sets the language.
			 */
			Language?: string;
			/**
			 * Gets or sets the name of the provider.
			 */
			ProviderName?: string;
			/**
			 * Gets or sets the type of the rating.
			 */
			RatingType?: RatingType;
			/**
			 * Gets a url used for previewing a smaller version.
			 */
			ThumbnailUrl?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: /* Enum ImageType. */ ImageType;
			/**
			 * Gets or sets the URL.
			 */
			Url?: string;
			/**
			 * Gets or sets the vote count.
			 */
			VoteCount?: number; // int32
			/**
			 * Gets or sets the width.
			 */
			Width?: number; // int32
		}
		/**
		 * Class RemoteImageResult.
		 */
		export interface RemoteImageResult {
			/**
			 * Gets or sets the images.
			 */
			Images?: /* Class RemoteImageInfo. */ RemoteImageInfo[];
			/**
			 * Gets or sets the providers.
			 */
			Providers?: string[];
			/**
			 * Gets or sets the total record count.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface RemoteSearchResult {
			AlbumArtist?: RemoteSearchResult;
			Artists?: RemoteSearchResult[];
			ImageUrl?: string;
			IndexNumber?: number; // int32
			IndexNumberEnd?: number; // int32
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			Overview?: string;
			ParentIndexNumber?: number; // int32
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the year.
			 */
			ProductionYear?: number; // int32
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			SearchProviderName?: string;
		}
		export interface RemoteSubtitleInfo {
			Author?: string;
			Comment?: string;
			CommunityRating?: number; // float
			DateCreated?: string; // date-time
			DownloadCount?: number; // int32
			Format?: string;
			Id?: string;
			IsHashMatch?: boolean;
			Name?: string;
			ProviderName?: string;
			ThreeLetterISOLanguageName?: string;
		}
		/**
		 * Class RemoveFromPlaylistRequestDto.
		 */
		export interface RemoveFromPlaylistRequestDto {
			/**
			 * Gets or sets the playlist identifiers ot the items.
			 */
			PlaylistItemIds?: string /* uuid */[];
		}
		export type RepeatMode = 'RepeatNone' | 'RepeatAll' | 'RepeatOne';
		/**
		 * Class RepositoryInfo.
		 */
		export interface RepositoryInfo {
			/**
			 * Gets or sets a value indicating whether the repository is enabled.
			 */
			Enabled?: boolean;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the URL.
			 */
			Url?: string;
		}
		export interface ResponseProfile {
			AudioCodec?: string;
			Conditions?: ProfileCondition[];
			Container?: string;
			MimeType?: string;
			OrgPn?: string;
			Type?: DlnaProfileType;
			VideoCodec?: string;
		}
		/**
		 * An enum representing the axis that should be scrolled.
		 */
		export type ScrollDirection = 'Horizontal' | 'Vertical';
		/**
		 * Class SearchHintResult.
		 */
		export interface SearchHint {
			/**
			 * Gets or sets the album.
			 */
			Album?: string;
			/**
			 * Gets or sets the album artist.
			 */
			AlbumArtist?: string;
			AlbumId?: string; // uuid
			/**
			 * Gets or sets the artists.
			 */
			Artists?: string[];
			/**
			 * Gets or sets the backdrop image item identifier.
			 */
			BackdropImageItemId?: string;
			/**
			 * Gets or sets the backdrop image tag.
			 */
			BackdropImageTag?: string;
			/**
			 * Gets or sets the channel identifier.
			 */
			ChannelId?: string; // uuid
			/**
			 * Gets or sets the name of the channel.
			 */
			ChannelName?: string;
			EndDate?: string; // date-time
			/**
			 * Gets or sets the episode count.
			 */
			EpisodeCount?: number; // int32
			Id?: string; // uuid
			/**
			 * Gets or sets the index number.
			 */
			IndexNumber?: number; // int32
			IsFolder?: boolean;
			/**
			 * Gets or sets the item id.
			 */
			ItemId?: string; // uuid
			/**
			 * Gets or sets the matched term.
			 */
			MatchedTerm?: string;
			/**
			 * Gets or sets the type of the media.
			 */
			MediaType?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the parent index number.
			 */
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the primary image aspect ratio.
			 */
			PrimaryImageAspectRatio?: number; // double
			/**
			 * Gets or sets the image tag.
			 */
			PrimaryImageTag?: string;
			/**
			 * Gets or sets the production year.
			 */
			ProductionYear?: number; // int32
			/**
			 * Gets or sets the run time ticks.
			 */
			RunTimeTicks?: number; // int64
			/**
			 * Gets or sets the series.
			 */
			Series?: string;
			/**
			 * Gets or sets the song count.
			 */
			SongCount?: number; // int32
			StartDate?: string; // date-time
			Status?: string;
			/**
			 * Gets or sets the thumb image item identifier.
			 */
			ThumbImageItemId?: string;
			/**
			 * Gets or sets the thumb image tag.
			 */
			ThumbImageTag?: string;
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
		}
		/**
		 * Class SearchHintResult.
		 */
		export interface SearchHintResult {
			/**
			 * Gets or sets the search hints.
			 */
			SearchHints?: /* Class SearchHintResult. */ SearchHint[];
			/**
			 * Gets or sets the total record count.
			 */
			TotalRecordCount?: number; // int32
		}
		/**
		 * Class SeekRequestDto.
		 */
		export interface SeekRequestDto {
			/**
			 * Gets or sets the position ticks.
			 */
			PositionTicks?: number; // int64
		}
		/**
		 * Class SendCommand.
		 */
		export interface SendCommand {
			/**
			 * Gets the command.
			 */
			readonly Command?: /* Enum SendCommandType. */ SendCommandType;
			/**
			 * Gets the UTC time when this command has been emitted.
			 */
			readonly EmittedAt?: string; // date-time
			/**
			 * Gets the group identifier.
			 */
			readonly GroupId?: string; // uuid
			/**
			 * Gets the playlist identifier of the playing item.
			 */
			readonly PlaylistItemId?: string; // uuid
			/**
			 * Gets the position ticks.
			 */
			readonly PositionTicks?: number; // int64
			/**
			 * Gets or sets the UTC time when to execute the command.
			 */
			When?: string; // date-time
		}
		/**
		 * Enum SendCommandType.
		 */
		export type SendCommandType = 'Unpause' | 'Pause' | 'Stop' | 'Seek';
		export interface SeriesInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface SeriesInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: SeriesInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		/**
		 * Enum SeriesStatus.
		 */
		export type SeriesStatus = 'Continuing' | 'Ended';
		/**
		 * Class SeriesTimerInfoDto.
		 */
		export interface SeriesTimerInfoDto {
			/**
			 * ChannelId of the recording.
			 */
			ChannelId?: string; // uuid
			/**
			 * ChannelName of the recording.
			 */
			ChannelName?: string;
			ChannelPrimaryImageTag?: string;
			/**
			 * Gets or sets the day pattern.
			 */
			DayPattern?: DayPattern;
			/**
			 * Gets or sets the days.
			 */
			Days?: DayOfWeek[];
			/**
			 * The end date of the recording, in UTC.
			 */
			EndDate?: string; // date-time
			/**
			 * Gets or sets the external channel identifier.
			 */
			ExternalChannelId?: string;
			/**
			 * Gets or sets the external identifier.
			 */
			ExternalId?: string;
			/**
			 * Gets or sets the external program identifier.
			 */
			ExternalProgramId?: string;
			/**
			 * Id of the recording.
			 */
			Id?: string;
			/**
			 * Gets or sets the image tags.
			 */
			ImageTags?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets a value indicating whether this instance is post padding required.
			 */
			IsPostPaddingRequired?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is pre padding required.
			 */
			IsPrePaddingRequired?: boolean;
			KeepUntil?: KeepUntil;
			KeepUpTo?: number; // int32
			/**
			 * Name of the recording.
			 */
			Name?: string;
			/**
			 * Description of the recording.
			 */
			Overview?: string;
			/**
			 * Gets or sets the parent backdrop image tags.
			 */
			ParentBackdropImageTags?: string[];
			/**
			 * If the item does not have any backdrops, this will hold the Id of the Parent that has one.
			 */
			ParentBackdropItemId?: string;
			/**
			 * Gets or sets the parent primary image item identifier.
			 */
			ParentPrimaryImageItemId?: string;
			/**
			 * Gets or sets the parent primary image tag.
			 */
			ParentPrimaryImageTag?: string;
			/**
			 * Gets or sets the parent thumb image tag.
			 */
			ParentThumbImageTag?: string;
			/**
			 * Gets or sets the parent thumb item id.
			 */
			ParentThumbItemId?: string;
			/**
			 * Gets or sets the post padding seconds.
			 */
			PostPaddingSeconds?: number; // int32
			/**
			 * Gets or sets the pre padding seconds.
			 */
			PrePaddingSeconds?: number; // int32
			/**
			 * Gets or sets the priority.
			 */
			Priority?: number; // int32
			/**
			 * Gets or sets the program identifier.
			 */
			ProgramId?: string;
			/**
			 * Gets or sets a value indicating whether [record any channel].
			 */
			RecordAnyChannel?: boolean;
			/**
			 * Gets or sets a value indicating whether [record any time].
			 */
			RecordAnyTime?: boolean;
			/**
			 * Gets or sets a value indicating whether [record new only].
			 */
			RecordNewOnly?: boolean;
			/**
			 * Gets or sets the server identifier.
			 */
			ServerId?: string;
			/**
			 * Gets or sets the name of the service.
			 */
			ServiceName?: string;
			SkipEpisodesInLibrary?: boolean;
			/**
			 * The start date of the recording, in UTC.
			 */
			StartDate?: string; // date-time
			Type?: string;
		}
		export interface SeriesTimerInfoDtoQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: /* Class SeriesTimerInfoDto. */ SeriesTimerInfoDto[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		/**
		 * Represents the server configuration.
		 */
		export interface ServerConfiguration {
			/**
			 * Gets or sets the number of days we should retain activity logs.
			 */
			ActivityLogRetentionDays?: number; // int32
			/**
			 * Gets or sets a value indicating whether Autodiscovery is enabled.
			 */
			AutoDiscovery?: boolean;
			/**
			 * Gets or sets a value indicating whether Autodiscovery tracing is enabled.
			 */
			AutoDiscoveryTracing?: boolean;
			BaseUrl?: string;
			/**
			 * Gets or sets the cache path.
			 */
			CachePath?: string;
			/**
			 * Gets or sets the password required to access the X.509 certificate data in the file specified by MediaBrowser.Model.Configuration.ServerConfiguration.CertificatePath.
			 */
			CertificatePassword?: string;
			/**
			 * Gets or sets the filesystem path of an X.509 certificate to use for SSL.
			 */
			CertificatePath?: string;
			CodecsUsed?: string[];
			ContentTypes?: NameValuePair[];
			/**
			 * Gets or sets the cors hosts.
			 */
			CorsHosts?: string[];
			DisableLiveTvChannelUserDataName?: boolean;
			DisplaySpecialsWithinSeasons?: boolean;
			/**
			 * Gets or sets a value indicating whether [enable case sensitive item ids].
			 */
			EnableCaseSensitiveItemIds?: boolean;
			/**
			 * Gets or sets a value indicating whether [enable dashboard response caching].
			 * Allows potential contributors without visual studio to modify production dashboard code and test changes.
			 */
			EnableDashboardResponseCaching?: boolean;
			EnableExternalContentInSuggestions?: boolean;
			EnableFolderView?: boolean;
			EnableGroupingIntoCollections?: boolean;
			/**
			 * Gets or sets a value indicating whether to use HTTPS.
			 */
			EnableHttps?: boolean;
			/**
			 * Gets or sets a value indicating whether IPV4 capability is enabled.
			 */
			EnableIPV4?: boolean;
			/**
			 * Gets or sets a value indicating whether IPV6 capability is enabled.
			 */
			EnableIPV6?: boolean;
			/**
			 * Gets or sets a value indicating whether to enable prometheus metrics exporting.
			 */
			EnableMetrics?: boolean;
			/**
			 * Gets a value indicating whether multi-socket binding is available.
			 */
			readonly EnableMultiSocketBinding?: boolean;
			EnableNewOmdbSupport?: boolean;
			EnableNormalizedItemByNameIds?: boolean;
			/**
			 * Gets or sets a value indicating whether access outside of the LAN is permitted.
			 */
			EnableRemoteAccess?: boolean;
			/**
			 * Gets or sets a value indicating whether detailed ssdp logs are sent to the console/log.\r\n"Emby.Dlna": "Debug" must be set in logging.default.json for this property to work.
			 */
			EnableSSDPTracing?: boolean;
			/**
			 * Gets or sets a value indicating whether slow server responses should be logged as a warning.
			 */
			EnableSlowResponseWarning?: boolean;
			/**
			 * Gets or sets a value indicating whether to enable automatic port forwarding.
			 */
			EnableUPnP?: boolean;
			/**
			 * Gets or sets the time (in seconds) between the pings of SSDP gateway monitor.
			 */
			GatewayMonitorPeriod?: number; // int32
			/**
			 * Gets or sets the ports that HDHomerun uses.
			 */
			HDHomerunPortRange?: string;
			/**
			 * Gets or sets the HTTP server port number.
			 */
			HttpServerPortNumber?: number; // int32
			/**
			 * Gets or sets the HTTPS server port number.
			 */
			HttpsPortNumber?: number; // int32
			/**
			 * Gets or sets a value indicating whether address names that match MediaBrowser.Model.Configuration.ServerConfiguration.VirtualInterfaceNames should be Ignore for the purposes of binding.
			 */
			IgnoreVirtualInterfaces?: boolean;
			ImageExtractionTimeoutMs?: number; // int32
			/**
			 * Gets or sets the image saving convention.
			 */
			ImageSavingConvention?: ImageSavingConvention;
			/**
			 * Gets or sets a value indicating whether this instance is port authorized.
			 */
			IsPortAuthorized?: boolean;
			/**
			 * Gets or sets a value indicating whether <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.RemoteIPFilter" /> contains a blacklist or a whitelist. Default is a whitelist.
			 */
			IsRemoteIPFilterBlacklist?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is first run.
			 */
			IsStartupWizardCompleted?: boolean;
			/**
			 * Gets or sets the known proxies.
			 */
			KnownProxies?: string[];
			/**
			 * Gets or sets the how many metadata refreshes can run concurrently.
			 */
			LibraryMetadataRefreshConcurrency?: number; // int32
			/**
			 * Gets or sets the delay in seconds that we will wait after a file system change to try and discover what has been added/removed
			 * Some delay is necessary with some items because their creation is not atomic.  It involves the creation of several
			 * different directories and files.
			 */
			LibraryMonitorDelay?: number; // int32
			/**
			 * Gets or sets the how the library scan fans out.
			 */
			LibraryScanFanoutConcurrency?: number; // int32
			/**
			 * Gets or sets the interface addresses which Jellyfin will bind to. If empty, all interfaces will be used.
			 */
			LocalNetworkAddresses?: string[];
			/**
			 * Gets or sets the subnets that are deemed to make up the LAN.
			 */
			LocalNetworkSubnets?: string[];
			/**
			 * Gets or sets the number of days we should retain log files.
			 */
			LogFileRetentionDays?: number; // int32
			/**
			 * Gets or sets the remaining minutes of a book that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.
			 */
			MaxAudiobookResume?: number; // int32
			/**
			 * Gets or sets the maximum percentage of an item that can be played while still saving playstate. If this percentage is crossed playstate will be reset to the beginning and the item will be marked watched.
			 */
			MaxResumePct?: number; // int32
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			MetadataNetworkPath?: string;
			MetadataOptions?: /* Class MetadataOptions. */ MetadataOptions[];
			/**
			 * Gets or sets the metadata path.
			 */
			MetadataPath?: string;
			/**
			 * Gets or sets the minimum minutes of a book that must be played in order for playstate to be updated.
			 */
			MinAudiobookResume?: number; // int32
			/**
			 * Gets or sets the minimum duration that an item must have in order to be eligible for playstate updates..
			 */
			MinResumeDurationSeconds?: number; // int32
			/**
			 * Gets or sets the minimum percentage of an item that must be played in order for playstate to be updated.
			 */
			MinResumePct?: number; // int32
			PathSubstitutions?: /* Defines the MediaBrowser.Model.Configuration.PathSubstitution. */ PathSubstitution[];
			PluginRepositories?: /* Class RepositoryInfo. */ RepositoryInfo[];
			/**
			 * Gets or sets the preferred metadata language.
			 */
			PreferredMetadataLanguage?: string;
			/**
			 * Gets or sets the last known version that was ran using the configuration.
			 */
			PreviousVersion?: Version;
			/**
			 * Gets or sets the stringified PreviousVersion to be stored/loaded,
			 * because System.Version itself isn't xml-serializable.
			 */
			PreviousVersionStr?: string;
			/**
			 * Gets or sets the public HTTPS port.
			 */
			PublicHttpsPort?: number; // int32
			/**
			 * Gets or sets the public mapped port.
			 */
			PublicPort?: number; // int32
			/**
			 * Gets or sets PublishedServerUri to advertise for specific subnets.
			 */
			PublishedServerUriBySubnet?: string[];
			/**
			 * Gets or sets a value indicating whether quick connect is available for use on this server.
			 */
			QuickConnectAvailable?: boolean;
			RemoteClientBitrateLimit?: number; // int32
			/**
			 * Gets or sets the filter for remote IP connectivity. Used in conjuntion with <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.IsRemoteIPFilterBlacklist" />.
			 */
			RemoteIPFilter?: string[];
			/**
			 * Gets or sets a value indicating whether older plugins should automatically be deleted from the plugin folder.
			 */
			RemoveOldPlugins?: boolean;
			/**
			 * Gets or sets a value indicating whether the server should force connections over HTTPS.
			 */
			RequireHttps?: boolean;
			/**
			 * Gets or sets a value indicating whether an IP address is to be used to filter the detailed ssdp logs that are being sent to the console/log.\r\nIf the setting "Emby.Dlna": "Debug" msut be set in logging.default.json for this property to work.
			 */
			SSDPTracingFilter?: string;
			SaveMetadataHidden?: boolean;
			ServerName?: string;
			SkipDeserializationForBasicTypes?: boolean;
			/**
			 * Gets or sets the threshold for the slow response time warning in ms.
			 */
			SlowResponseThresholdMs?: number; // int64
			/**
			 * Gets or sets characters to be removed from strings to create a sort name.
			 */
			SortRemoveCharacters?: string[];
			/**
			 * Gets or sets words to be removed from strings to create a sort name.
			 */
			SortRemoveWords?: string[];
			/**
			 * Gets or sets characters to be replaced with a ' ' in strings to create a sort name.
			 */
			SortReplaceCharacters?: string[];
			/**
			 * Gets or sets a value indicating whether all IPv6 interfaces should be treated as on the internal network.
			 * Depending on the address range implemented ULA ranges might not be used.
			 */
			TrustAllIP6Interfaces?: boolean;
			/**
			 * Gets or sets client udp port range.
			 */
			UDPPortRange?: string;
			/**
			 * Gets or sets the number of times SSDP UDP messages are sent.
			 */
			UDPSendCount?: number; // int32
			/**
			 * Gets or sets the delay between each groups of SSDP messages (in ms).
			 */
			UDPSendDelay?: number; // int32
			UICulture?: string;
			/**
			 * Gets or sets a value indicating whether the http port should be mapped as part of UPnP automatic port forwarding.
			 */
			UPnPCreateHttpPortMap?: boolean;
			UninstalledPlugins?: string[];
			/**
			 * Gets or sets a value indicating the interfaces that should be ignored. The list can be comma separated. <seealso cref="P:MediaBrowser.Model.Configuration.ServerConfiguration.IgnoreVirtualInterfaces" />.
			 */
			VirtualInterfaceNames?: string;
		}
		/**
		 * Class SessionInfo.
		 */
		export interface SessionInfo {
			AdditionalUsers?: /* Class SessionUserInfo. */ SessionUserInfo[];
			/**
			 * Gets or sets the application version.
			 */
			ApplicationVersion?: string;
			Capabilities?: ClientCapabilities;
			/**
			 * Gets or sets the type of the client.
			 */
			Client?: string;
			/**
			 * Gets or sets the device id.
			 */
			DeviceId?: string;
			/**
			 * Gets or sets the name of the device.
			 */
			DeviceName?: string;
			/**
			 * Gets or sets the type of the device.
			 */
			DeviceType?: string;
			/**
			 * Class BaseItem.
			 */
			FullNowPlayingItem?: /* Class BaseItem. */ BaseItem;
			HasCustomDeviceName?: boolean;
			/**
			 * Gets or sets the id.
			 */
			Id?: string;
			/**
			 * Gets a value indicating whether this instance is active.
			 */
			readonly IsActive?: boolean;
			/**
			 * Gets or sets the last activity date.
			 */
			LastActivityDate?: string; // date-time
			/**
			 * Gets or sets the last playback check in.
			 */
			LastPlaybackCheckIn?: string; // date-time
			/**
			 * Gets or sets the now playing item.
			 */
			NowPlayingItem?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			NowPlayingQueue?: QueueItem[];
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			NowViewingItem?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			PlayState?: PlayerStateInfo;
			/**
			 * Gets or sets the playable media types.
			 */
			readonly PlayableMediaTypes?: string[];
			PlaylistItemId?: string;
			/**
			 * Gets or sets the remote end point.
			 */
			RemoteEndPoint?: string;
			ServerId?: string;
			/**
			 * Gets or sets the supported commands.
			 */
			readonly SupportedCommands?: /* This exists simply to identify a set of known commands. */ GeneralCommandType[];
			readonly SupportsMediaControl?: boolean;
			readonly SupportsRemoteControl?: boolean;
			TranscodingInfo?: TranscodingInfo;
			/**
			 * Gets or sets the user id.
			 */
			UserId?: string; // uuid
			/**
			 * Gets or sets the username.
			 */
			UserName?: string;
			UserPrimaryImageTag?: string;
		}
		/**
		 * Class SessionUserInfo.
		 */
		export interface SessionUserInfo {
			/**
			 * Gets or sets the user identifier.
			 */
			UserId?: string; // uuid
			/**
			 * Gets or sets the name of the user.
			 */
			UserName?: string;
		}
		/**
		 * Set channel mapping dto.
		 */
		export interface SetChannelMappingDto {
			/**
			 * Gets or sets the provider channel id.
			 */
			ProviderChannelId: string;
			/**
			 * Gets or sets the provider id.
			 */
			ProviderId: string;
			/**
			 * Gets or sets the tuner channel id.
			 */
			TunerChannelId: string;
		}
		/**
		 * Class SetPlaylistItemRequestDto.
		 */
		export interface SetPlaylistItemRequestDto {
			/**
			 * Gets or sets the playlist identifier of the playing item.
			 */
			PlaylistItemId?: string; // uuid
		}
		/**
		 * Class SetRepeatModeRequestDto.
		 */
		export interface SetRepeatModeRequestDto {
			/**
			 * Gets or sets the repeat mode.
			 */
			Mode?: /* Enum GroupRepeatMode. */ GroupRepeatMode;
		}
		/**
		 * Class SetShuffleModeRequestDto.
		 */
		export interface SetShuffleModeRequestDto {
			/**
			 * Gets or sets the shuffle mode.
			 */
			Mode?: /* Enum GroupShuffleMode. */ GroupShuffleMode;
		}
		export interface SongInfo {
			Album?: string;
			AlbumArtists?: string[];
			Artists?: string[];
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		/**
		 * An enum representing the sorting order.
		 */
		export type SortOrder = 'Ascending' | 'Descending';
		/**
		 * Special view option dto.
		 */
		export interface SpecialViewOptionDto {
			/**
			 * Gets or sets view option id.
			 */
			Id?: string;
			/**
			 * Gets or sets view option name.
			 */
			Name?: string;
		}
		/**
		 * The startup configuration DTO.
		 */
		export interface StartupConfigurationDto {
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the preferred language for the metadata.
			 */
			PreferredMetadataLanguage?: string;
			/**
			 * Gets or sets UI language culture.
			 */
			UICulture?: string;
		}
		/**
		 * Startup remote access dto.
		 */
		export interface StartupRemoteAccessDto {
			/**
			 * Gets or sets a value indicating whether enable automatic port mapping.
			 */
			EnableAutomaticPortMapping: boolean;
			/**
			 * Gets or sets a value indicating whether enable remote access.
			 */
			EnableRemoteAccess: boolean;
		}
		/**
		 * The startup user DTO.
		 */
		export interface StartupUserDto {
			/**
			 * Gets or sets the username.
			 */
			Name?: string;
			/**
			 * Gets or sets the user's password.
			 */
			Password?: string;
		}
		export type SubtitleDeliveryMethod = 'Encode' | 'Embed' | 'External' | 'Hls';
		/**
		 * An enum representing a subtitle playback mode.
		 */
		export type SubtitlePlaybackMode = 'Default' | 'Always' | 'OnlyForced' | 'None' | 'Smart';
		export interface SubtitleProfile {
			Container?: string;
			DidlMode?: string;
			Format?: string;
			Language?: string;
			Method?: SubtitleDeliveryMethod;
		}
		/**
		 * Enum SyncPlayUserAccessType.
		 */
		export type SyncPlayUserAccessType = 'CreateAndJoinGroups' | 'JoinGroups' | 'None';
		/**
		 * Class SystemInfo.
		 */
		export interface SystemInfo {
			/**
			 * Gets or sets the cache path.
			 */
			CachePath?: string;
			CanLaunchWebBrowser?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance can self restart.
			 */
			CanSelfRestart?: boolean;
			/**
			 * Gets or sets the completed installations.
			 */
			CompletedInstallations?: /* Class InstallationInfo. */ InstallationInfo[];
			/**
			 * Enum describing the location of the FFmpeg tool.
			 */
			EncoderLocation?: /* Enum describing the location of the FFmpeg tool. */ FFmpegLocation;
			/**
			 * Gets or sets a value indicating whether this instance has pending restart.
			 */
			HasPendingRestart?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance has update available.
			 */
			HasUpdateAvailable?: boolean;
			/**
			 * Gets or sets the id.
			 */
			Id?: string;
			/**
			 * Gets or sets the internal metadata path.
			 */
			InternalMetadataPath?: string;
			IsShuttingDown?: boolean;
			/**
			 * Gets or sets the items by name path.
			 */
			ItemsByNamePath?: string;
			/**
			 * Gets or sets the local address.
			 */
			LocalAddress?: string;
			/**
			 * Gets or sets the log path.
			 */
			LogPath?: string;
			/**
			 * Gets or sets the operating system.
			 */
			OperatingSystem?: string;
			/**
			 * Gets or sets the display name of the operating system.
			 */
			OperatingSystemDisplayName?: string;
			/**
			 * Get or sets the package name.
			 */
			PackageName?: string;
			/**
			 * Gets or sets the product name. This is the AssemblyProduct name.
			 */
			ProductName?: string;
			/**
			 * Gets or sets the program data path.
			 */
			ProgramDataPath?: string;
			/**
			 * Gets or sets the name of the server.
			 */
			ServerName?: string;
			/**
			 * Gets or sets a value indicating whether the startup wizard is completed.
			 */
			StartupWizardCompleted?: boolean;
			/**
			 * Gets or sets a value indicating whether [supports library monitor].
			 */
			SupportsLibraryMonitor?: boolean;
			SystemArchitecture?: Architecture;
			/**
			 * Gets or sets the transcode path.
			 */
			TranscodingTempPath?: string;
			/**
			 * Gets or sets the server version.
			 */
			Version?: string;
			/**
			 * Gets or sets the web UI resources path.
			 */
			WebPath?: string;
			/**
			 * Gets or sets the web socket port number.
			 */
			WebSocketPortNumber?: number; // int32
		}
		/**
		 * Enum TaskCompletionStatus.
		 */
		export type TaskCompletionStatus = 'Completed' | 'Failed' | 'Cancelled' | 'Aborted';
		/**
		 * Class TaskInfo.
		 */
		export interface TaskInfo {
			/**
			 * Gets or sets the category.
			 */
			Category?: string;
			/**
			 * Gets or sets the progress.
			 */
			CurrentProgressPercentage?: number; // double
			/**
			 * Gets or sets the description.
			 */
			Description?: string;
			/**
			 * Gets or sets the id.
			 */
			Id?: string;
			/**
			 * Gets or sets a value indicating whether this instance is hidden.
			 */
			IsHidden?: boolean;
			/**
			 * Gets or sets the key.
			 */
			Key?: string;
			/**
			 * Gets or sets the last execution result.
			 */
			LastExecutionResult?: /* Class TaskExecutionInfo. */ TaskResult;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the state of the task.
			 */
			State?: /* Enum TaskState. */ TaskState;
			/**
			 * Gets or sets the triggers.
			 */
			Triggers?: /* Class TaskTriggerInfo. */ TaskTriggerInfo[];
		}
		/**
		 * Class TaskExecutionInfo.
		 */
		export interface TaskResult {
			/**
			 * Gets or sets the end time UTC.
			 */
			EndTimeUtc?: string; // date-time
			/**
			 * Gets or sets the error message.
			 */
			ErrorMessage?: string;
			/**
			 * Gets or sets the id.
			 */
			Id?: string;
			/**
			 * Gets or sets the key.
			 */
			Key?: string;
			/**
			 * Gets or sets the long error message.
			 */
			LongErrorMessage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the start time UTC.
			 */
			StartTimeUtc?: string; // date-time
			/**
			 * Gets or sets the status.
			 */
			Status?: /* Enum TaskCompletionStatus. */ TaskCompletionStatus;
		}
		/**
		 * Enum TaskState.
		 */
		export type TaskState = 'Idle' | 'Cancelling' | 'Running';
		/**
		 * Class TaskTriggerInfo.
		 */
		export interface TaskTriggerInfo {
			/**
			 * Gets or sets the day of week.
			 */
			DayOfWeek?: DayOfWeek;
			/**
			 * Gets or sets the interval.
			 */
			IntervalTicks?: number; // int64
			/**
			 * Gets or sets the maximum runtime ticks.
			 */
			MaxRuntimeTicks?: number; // int64
			/**
			 * Gets or sets the time of day.
			 */
			TimeOfDayTicks?: number; // int64
			/**
			 * Gets or sets the type.
			 */
			Type?: string;
		}
		/**
		 * Class ThemeMediaResult.
		 */
		export interface ThemeMediaResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto[];
			/**
			 * Gets or sets the owner id.
			 */
			OwnerId?: string; // uuid
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface TimerEventInfo {
			readonly Id?: string;
			ProgramId?: string; // uuid
		}
		export interface TimerInfoDto {
			/**
			 * ChannelId of the recording.
			 */
			ChannelId?: string; // uuid
			/**
			 * ChannelName of the recording.
			 */
			ChannelName?: string;
			ChannelPrimaryImageTag?: string;
			/**
			 * The end date of the recording, in UTC.
			 */
			EndDate?: string; // date-time
			/**
			 * Gets or sets the external channel identifier.
			 */
			ExternalChannelId?: string;
			/**
			 * Gets or sets the external identifier.
			 */
			ExternalId?: string;
			/**
			 * Gets or sets the external program identifier.
			 */
			ExternalProgramId?: string;
			/**
			 * Gets or sets the external series timer identifier.
			 */
			ExternalSeriesTimerId?: string;
			/**
			 * Id of the recording.
			 */
			Id?: string;
			/**
			 * Gets or sets a value indicating whether this instance is post padding required.
			 */
			IsPostPaddingRequired?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is pre padding required.
			 */
			IsPrePaddingRequired?: boolean;
			KeepUntil?: KeepUntil;
			/**
			 * Name of the recording.
			 */
			Name?: string;
			/**
			 * Description of the recording.
			 */
			Overview?: string;
			/**
			 * Gets or sets the parent backdrop image tags.
			 */
			ParentBackdropImageTags?: string[];
			/**
			 * If the item does not have any backdrops, this will hold the Id of the Parent that has one.
			 */
			ParentBackdropItemId?: string;
			/**
			 * Gets or sets the post padding seconds.
			 */
			PostPaddingSeconds?: number; // int32
			/**
			 * Gets or sets the pre padding seconds.
			 */
			PrePaddingSeconds?: number; // int32
			/**
			 * Gets or sets the priority.
			 */
			Priority?: number; // int32
			/**
			 * Gets or sets the program identifier.
			 */
			ProgramId?: string;
			/**
			 * Gets or sets the program information.
			 */
			ProgramInfo?: /**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */
			BaseItemDto;
			/**
			 * Gets or sets the run time ticks.
			 */
			RunTimeTicks?: number; // int64
			/**
			 * Gets or sets the series timer identifier.
			 */
			SeriesTimerId?: string;
			/**
			 * Gets or sets the server identifier.
			 */
			ServerId?: string;
			/**
			 * Gets or sets the name of the service.
			 */
			ServiceName?: string;
			/**
			 * The start date of the recording, in UTC.
			 */
			StartDate?: string; // date-time
			/**
			 * Gets or sets the status.
			 */
			Status?: RecordingStatus;
			Type?: string;
		}
		export interface TimerInfoDtoQueryResult {
			/**
			 * Gets or sets the items.
			 */
			Items?: TimerInfoDto[];
			/**
			 * The index of the first record in Items.
			 */
			StartIndex?: number; // int32
			/**
			 * The total number of records available.
			 */
			TotalRecordCount?: number; // int32
		}
		export interface TrailerInfo {
			IndexNumber?: number; // int32
			IsAutomated?: boolean;
			/**
			 * Gets or sets the metadata country code.
			 */
			MetadataCountryCode?: string;
			/**
			 * Gets or sets the metadata language.
			 */
			MetadataLanguage?: string;
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			ParentIndexNumber?: number; // int32
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			PremiereDate?: string; // date-time
			/**
			 * Gets or sets the provider ids.
			 */
			ProviderIds?: {
				[name: string]: string;
			};
			/**
			 * Gets or sets the year.
			 */
			Year?: number; // int32
		}
		export interface TrailerInfoRemoteSearchQuery {
			/**
			 * Gets or sets a value indicating whether disabled providers should be included.
			 */
			IncludeDisabledProviders?: boolean;
			ItemId?: string; // uuid
			SearchInfo?: TrailerInfo;
			/**
			 * Will only search within the given provider when set.
			 */
			SearchProviderName?: string;
		}
		export type TranscodeReason =
			| 'ContainerNotSupported'
			| 'VideoCodecNotSupported'
			| 'AudioCodecNotSupported'
			| 'ContainerBitrateExceedsLimit'
			| 'AudioBitrateNotSupported'
			| 'AudioChannelsNotSupported'
			| 'VideoResolutionNotSupported'
			| 'UnknownVideoStreamInfo'
			| 'UnknownAudioStreamInfo'
			| 'AudioProfileNotSupported'
			| 'AudioSampleRateNotSupported'
			| 'AnamorphicVideoNotSupported'
			| 'InterlacedVideoNotSupported'
			| 'SecondaryAudioNotSupported'
			| 'RefFramesNotSupported'
			| 'VideoBitDepthNotSupported'
			| 'VideoBitrateNotSupported'
			| 'VideoFramerateNotSupported'
			| 'VideoLevelNotSupported'
			| 'VideoProfileNotSupported'
			| 'AudioBitDepthNotSupported'
			| 'SubtitleCodecNotSupported'
			| 'DirectPlayError';
		export type TranscodeSeekInfo = 'Auto' | 'Bytes';
		export interface TranscodingInfo {
			AudioChannels?: number; // int32
			AudioCodec?: string;
			Bitrate?: number; // int32
			CompletionPercentage?: number; // double
			Container?: string;
			Framerate?: number; // float
			Height?: number; // int32
			IsAudioDirect?: boolean;
			IsVideoDirect?: boolean;
			TranscodeReasons?: TranscodeReason[];
			VideoCodec?: string;
			Width?: number; // int32
		}
		export interface TranscodingProfile {
			AudioCodec?: string;
			BreakOnNonKeyFrames?: boolean;
			Container?: string;
			Context?: EncodingContext;
			CopyTimestamps?: boolean;
			EnableMpegtsM2TsMode?: boolean;
			EnableSubtitlesInManifest?: boolean;
			EstimateContentLength?: boolean;
			MaxAudioChannels?: string;
			MinSegments?: number; // int32
			Protocol?: string;
			SegmentLength?: number; // int32
			TranscodeSeekInfo?: TranscodeSeekInfo;
			Type?: DlnaProfileType;
			VideoCodec?: string;
		}
		export type TransportStreamTimestamp = 'None' | 'Zero' | 'Valid';
		export interface TunerChannelMapping {
			Id?: string;
			Name?: string;
			ProviderChannelId?: string;
			ProviderChannelName?: string;
		}
		export interface TunerHostInfo {
			AllowHWTranscoding?: boolean;
			DeviceId?: string;
			EnableStreamLooping?: boolean;
			FriendlyName?: string;
			Id?: string;
			ImportFavoritesOnly?: boolean;
			Source?: string;
			TunerCount?: number; // int32
			Type?: string;
			Url?: string;
			UserAgent?: string;
		}
		export interface TypeOptions {
			ImageFetcherOrder?: string[];
			ImageFetchers?: string[];
			ImageOptions?: ImageOption[];
			MetadataFetcherOrder?: string[];
			MetadataFetchers?: string[];
			Type?: string;
		}
		/**
		 * An enum representing an unrated item.
		 */
		export type UnratedItem =
			| 'Movie'
			| 'Trailer'
			| 'Series'
			| 'Music'
			| 'Book'
			| 'LiveTvChannel'
			| 'LiveTvProgram'
			| 'ChannelContent'
			| 'Other';
		/**
		 * Update library options dto.
		 */
		export interface UpdateLibraryOptionsDto {
			/**
			 * Gets or sets the library item id.
			 */
			Id?: string; // uuid
			/**
			 * Gets or sets library options.
			 */
			LibraryOptions?: LibraryOptions;
		}
		/**
		 * The update user easy password request body.
		 */
		export interface UpdateUserEasyPassword {
			/**
			 * Gets or sets the new sha1-hashed password.
			 */
			NewPassword?: string;
			/**
			 * Gets or sets the new password.
			 */
			NewPw?: string;
			/**
			 * Gets or sets a value indicating whether to reset the password.
			 */
			ResetPassword?: boolean;
		}
		/**
		 * The update user password request body.
		 */
		export interface UpdateUserPassword {
			/**
			 * Gets or sets the current sha1-hashed password.
			 */
			CurrentPassword?: string;
			/**
			 * Gets or sets the current plain text password.
			 */
			CurrentPw?: string;
			/**
			 * Gets or sets the new plain text password.
			 */
			NewPw?: string;
			/**
			 * Gets or sets a value indicating whether to reset the password.
			 */
			ResetPassword?: boolean;
		}
		/**
		 * Upload subtitles dto.
		 */
		export interface UploadSubtitleDto {
			/**
			 * Gets or sets the subtitle data.
			 */
			Data: string;
			/**
			 * Gets or sets the subtitle format.
			 */
			Format: string;
			/**
			 * Gets or sets a value indicating whether the subtitle is forced.
			 */
			IsForced: boolean;
			/**
			 * Gets or sets the subtitle language.
			 */
			Language: string;
		}
		/**
		 * Class UserConfiguration.
		 */
		export interface UserConfiguration {
			/**
			 * Gets or sets the audio language preference.
			 */
			AudioLanguagePreference?: string;
			DisplayCollectionsView?: boolean;
			DisplayMissingEpisodes?: boolean;
			EnableLocalPassword?: boolean;
			EnableNextEpisodeAutoPlay?: boolean;
			GroupedFolders?: string[];
			HidePlayedInLatest?: boolean;
			LatestItemsExcludes?: string[];
			MyMediaExcludes?: string[];
			OrderedViews?: string[];
			/**
			 * Gets or sets a value indicating whether [play default audio track].
			 */
			PlayDefaultAudioTrack?: boolean;
			RememberAudioSelections?: boolean;
			RememberSubtitleSelections?: boolean;
			/**
			 * Gets or sets the subtitle language preference.
			 */
			SubtitleLanguagePreference?: string;
			/**
			 * An enum representing a subtitle playback mode.
			 */
			SubtitleMode?: /* An enum representing a subtitle playback mode. */ SubtitlePlaybackMode;
		}
		/**
		 * Class UserDto.
		 */
		export interface UserDto {
			/**
			 * Gets or sets the configuration.
			 */
			Configuration?: /* Class UserConfiguration. */ UserConfiguration;
			/**
			 * Gets or sets whether async login is enabled or not.
			 */
			EnableAutoLogin?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance has configured easy password.
			 */
			HasConfiguredEasyPassword?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance has configured password.
			 */
			HasConfiguredPassword?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance has password.
			 */
			HasPassword?: boolean;
			/**
			 * Gets or sets the id.
			 */
			Id?: string; // uuid
			/**
			 * Gets or sets the last activity date.
			 */
			LastActivityDate?: string; // date-time
			/**
			 * Gets or sets the last login date.
			 */
			LastLoginDate?: string; // date-time
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the policy.
			 */
			Policy?: UserPolicy;
			/**
			 * Gets or sets the primary image aspect ratio.
			 */
			PrimaryImageAspectRatio?: number; // double
			/**
			 * Gets or sets the primary image tag.
			 */
			PrimaryImageTag?: string;
			/**
			 * Gets or sets the server identifier.
			 */
			ServerId?: string;
			/**
			 * Gets or sets the name of the server.
			 * This is not used by the server and is for client-side usage only.
			 */
			ServerName?: string;
		}
		/**
		 * Class UserItemDataDto.
		 */
		export interface UserItemDataDto {
			/**
			 * Gets or sets a value indicating whether this instance is favorite.
			 */
			IsFavorite?: boolean;
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string;
			/**
			 * Gets or sets the key.
			 */
			Key?: string;
			/**
			 * Gets or sets the last played date.
			 */
			LastPlayedDate?: string; // date-time
			/**
			 * Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is likes.
			 */
			Likes?: boolean;
			/**
			 * Gets or sets the play count.
			 */
			PlayCount?: number; // int32
			/**
			 * Gets or sets the playback position ticks.
			 */
			PlaybackPositionTicks?: number; // int64
			/**
			 * Gets or sets a value indicating whether this MediaBrowser.Model.Dto.UserItemDataDto is played.
			 */
			Played?: boolean;
			/**
			 * Gets or sets the played percentage.
			 */
			PlayedPercentage?: number; // double
			/**
			 * Gets or sets the rating.
			 */
			Rating?: number; // double
			/**
			 * Gets or sets the unplayed item count.
			 */
			UnplayedItemCount?: number; // int32
		}
		export interface UserPolicy {
			AccessSchedules?: /* An entity representing a user's access schedule. */ AccessSchedule[];
			AuthenticationProviderId?: string;
			BlockUnratedItems?: /* An enum representing an unrated item. */ UnratedItem[];
			BlockedChannels?: string /* uuid */[];
			BlockedMediaFolders?: string /* uuid */[];
			BlockedTags?: string[];
			EnableAllChannels?: boolean;
			EnableAllDevices?: boolean;
			EnableAllFolders?: boolean;
			EnableAudioPlaybackTranscoding?: boolean;
			EnableContentDeletion?: boolean;
			EnableContentDeletionFromFolders?: string[];
			EnableContentDownloading?: boolean;
			EnableLiveTvAccess?: boolean;
			EnableLiveTvManagement?: boolean;
			EnableMediaConversion?: boolean;
			EnableMediaPlayback?: boolean;
			EnablePlaybackRemuxing?: boolean;
			EnablePublicSharing?: boolean;
			EnableRemoteAccess?: boolean;
			EnableRemoteControlOfOtherUsers?: boolean;
			EnableSharedDeviceControl?: boolean;
			/**
			 * Gets or sets a value indicating whether [enable synchronize].
			 */
			EnableSyncTranscoding?: boolean;
			EnableUserPreferenceAccess?: boolean;
			EnableVideoPlaybackTranscoding?: boolean;
			EnabledChannels?: string /* uuid */[];
			EnabledDevices?: string[];
			EnabledFolders?: string /* uuid */[];
			ForceRemoteSourceTranscoding?: boolean;
			InvalidLoginAttemptCount?: number; // int32
			/**
			 * Gets or sets a value indicating whether this instance is administrator.
			 */
			IsAdministrator?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is disabled.
			 */
			IsDisabled?: boolean;
			/**
			 * Gets or sets a value indicating whether this instance is hidden.
			 */
			IsHidden?: boolean;
			LoginAttemptsBeforeLockout?: number; // int32
			MaxActiveSessions?: number; // int32
			/**
			 * Gets or sets the max parental rating.
			 */
			MaxParentalRating?: number; // int32
			PasswordResetProviderId?: string;
			RemoteClientBitrateLimit?: number; // int32
			/**
			 * Enum SyncPlayUserAccessType.
			 */
			SyncPlayAccess?: /* Enum SyncPlayUserAccessType. */ SyncPlayUserAccessType;
		}
		/**
		 * Class UtcTimeResponse.
		 */
		export interface UtcTimeResponse {
			/**
			 * Gets the UTC time when request has been received.
			 */
			readonly RequestReceptionTime?: string; // date-time
			/**
			 * Gets the UTC time when response has been sent.
			 */
			readonly ResponseTransmissionTime?: string; // date-time
		}
		/**
		 * Validate path object.
		 */
		export interface ValidatePathDto {
			/**
			 * Gets or sets is path file.
			 */
			IsFile?: boolean;
			/**
			 * Gets or sets the path.
			 */
			Path?: string;
			/**
			 * Gets or sets a value indicating whether validate if path is writable.
			 */
			ValidateWritable?: boolean;
		}
		export interface Version {
			readonly Build?: number; // int32
			readonly Major?: number; // int32
			readonly MajorRevision?: number; // int32
			readonly Minor?: number; // int32
			readonly MinorRevision?: number; // int32
			readonly Revision?: number; // int32
		}
		/**
		 * Defines the MediaBrowser.Model.Updates.VersionInfo class.
		 */
		export interface VersionInfo {
			/**
			 * Gets the version as a System.Version.
			 */
			readonly VersionNumber?: Version;
			/**
			 * Gets or sets the changelog for this version.
			 */
			changelog?: string;
			/**
			 * Gets or sets a checksum for the binary.
			 */
			checksum?: string;
			/**
			 * Gets or sets the repository name.
			 */
			repositoryName?: string;
			/**
			 * Gets or sets the repository url.
			 */
			repositoryUrl?: string;
			/**
			 * Gets or sets the source URL.
			 */
			sourceUrl?: string;
			/**
			 * Gets or sets the ABI that this version was built against.
			 */
			targetAbi?: string;
			/**
			 * Gets or sets a timestamp of when the binary was built.
			 */
			timestamp?: string;
			/**
			 * Gets or sets the version.
			 */
			version?: string;
		}
		export type Video3DFormat =
			| 'HalfSideBySide'
			| 'FullSideBySide'
			| 'FullTopAndBottom'
			| 'HalfTopAndBottom'
			| 'MVC';
		/**
		 * Enum VideoType.
		 */
		export type VideoType = 'VideoFile' | 'Iso' | 'Dvd' | 'BluRay';
		/**
		 * Used to hold information about a user's list of configured virtual folders.
		 */
		export interface VirtualFolderInfo {
			/**
			 * Gets or sets the type of the collection.
			 */
			CollectionType?: CollectionTypeOptions;
			/**
			 * Gets or sets the item identifier.
			 */
			ItemId?: string;
			LibraryOptions?: LibraryOptions;
			/**
			 * Gets or sets the locations.
			 */
			Locations?: string[];
			/**
			 * Gets or sets the name.
			 */
			Name?: string;
			/**
			 * Gets or sets the primary image item identifier.
			 */
			PrimaryImageItemId?: string;
			RefreshProgress?: number; // double
			RefreshStatus?: string;
		}
		/**
		 * Provides the MAC address and port for wake-on-LAN functionality.
		 */
		export interface WakeOnLanInfo {
			/**
			 * Gets the MAC address of the device.
			 */
			MacAddress?: string;
			/**
			 * Gets or sets the wake-on-LAN port.
			 */
			Port?: number; // int32
		}
		/**
		 * Defines the MediaBrowser.Model.Dlna.XmlAttribute.
		 */
		export interface XmlAttribute {
			/**
			 * Gets or sets the name of the attribute.
			 */
			Name?: string;
			/**
			 * Gets or sets the value of the attribute.
			 */
			Value?: string;
		}
	}
}
export namespace Paths {
	namespace Activate {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace AddListingProvider {
		namespace Parameters {
			/**
			 * Password.
			 */
			export type Pw = string;
			/**
			 * Validate listings.
			 */
			export type ValidateListings = boolean;
			/**
			 * Validate login.
			 */
			export type ValidateLogin = boolean;
		}
		export interface QueryParameters {
			pw?: /* Password. */ Parameters.Pw;
			validateListings?: /* Validate listings. */ Parameters.ValidateListings;
			validateLogin?: /* Validate login. */ Parameters.ValidateLogin;
		}
		/**
		 * New listings info.
		 */
		export type RequestBody = Components.Schemas.ListingsProviderInfo;
		namespace Responses {
			export type $200 = Components.Schemas.ListingsProviderInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddMediaPath {
		namespace Parameters {
			/**
			 * Whether to refresh the library.
			 */
			export type RefreshLibrary = boolean;
		}
		export interface QueryParameters {
			refreshLibrary?: /* Whether to refresh the library. */ Parameters.RefreshLibrary;
		}
		/**
		 * The media path dto.
		 */
		export type RequestBody = /* Media Path dto. */ Components.Schemas.MediaPathDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddToCollection {
		namespace Parameters {
			/**
			 * The collection id.
			 */
			export type CollectionId = string; // uuid
			/**
			 * Item ids, comma delimited.
			 */
			export type Ids = string /* uuid */[];
		}
		export interface PathParameters {
			collectionId: /* The collection id. */ Parameters.CollectionId /* uuid */;
		}
		export interface QueryParameters {
			ids: /* Item ids, comma delimited. */ Parameters.Ids;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddToPlaylist {
		namespace Parameters {
			/**
			 * Item id, comma delimited.
			 */
			export type Ids = string /* uuid */[];
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string; // uuid
			/**
			 * The userId.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			playlistId: /* The playlist id. */ Parameters.PlaylistId /* uuid */;
		}
		export interface QueryParameters {
			ids?: /* Item id, comma delimited. */ Parameters.Ids;
			userId?: /* The userId. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddTunerHost {
		/**
		 * New tuner host.
		 */
		export type RequestBody = Components.Schemas.TunerHostInfo;
		namespace Responses {
			export type $200 = Components.Schemas.TunerHostInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddUserToSession {
		namespace Parameters {
			/**
			 * The session id.
			 */
			export type SessionId = string;
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AddVirtualFolder {
		namespace Parameters {
			/**
			 * The type of the collection.
			 */
			export type CollectionType = Components.Schemas.CollectionTypeOptions;
			/**
			 * The name of the virtual folder.
			 */
			export type Name = string;
			/**
			 * The paths of the virtual folder.
			 */
			export type Paths = string[];
			/**
			 * Whether to refresh the library.
			 */
			export type RefreshLibrary = boolean;
		}
		export interface QueryParameters {
			name?: /* The name of the virtual folder. */ Parameters.Name;
			collectionType?: /* The type of the collection. */ Parameters.CollectionType;
			paths?: /* The paths of the virtual folder. */ Parameters.Paths;
			refreshLibrary?: /* Whether to refresh the library. */ Parameters.RefreshLibrary;
		}
		/**
		 * The library options.
		 */
		export type RequestBody = /* Add virtual folder dto. */ Components.Schemas.AddVirtualFolderDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ApplySearchCriteria {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Whether or not to replace all images. Default: True.
			 */
			export type ReplaceAllImages = boolean;
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			replaceAllImages?: /* Optional. Whether or not to replace all images. Default: True. */ Parameters.ReplaceAllImages;
		}
		/**
		 * The remote search result.
		 */
		export type RequestBody = Components.Schemas.RemoteSearchResult;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace AuthenticateUser {
		namespace Parameters {
			/**
			 * The password sha1-hash.
			 */
			export type Password = string;
			/**
			 * The password as plain text.
			 */
			export type Pw = string;
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			pw: /* The password as plain text. */ Parameters.Pw;
			password?: /* The password sha1-hash. */ Parameters.Password;
		}
		namespace Responses {
			export type $200 = Components.Schemas.AuthenticationResult;
			export type $403 = Components.Schemas.ProblemDetails;
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace AuthenticateUserByName {
		/**
		 * The M:Jellyfin.Api.Controllers.UserController.AuthenticateUserByName(Jellyfin.Api.Models.UserDtos.AuthenticateUserByName) request.
		 */
		export type RequestBody = /* The authenticate user by name request body. */ Components.Schemas.AuthenticateUserByName;
		namespace Responses {
			export type $200 = Components.Schemas.AuthenticationResult;
		}
	}
	namespace AuthenticateWithQuickConnect {
		/**
		 * The Jellyfin.Api.Models.UserDtos.QuickConnectDto request.
		 */
		export type RequestBody = /* The quick connect request body. */ Components.Schemas.QuickConnectDto;
		namespace Responses {
			export type $200 = Components.Schemas.AuthenticationResult;
			export interface $400 {}
		}
	}
	namespace Authorize {
		namespace Parameters {
			/**
			 * Quick connect code to authorize.
			 */
			export type Code = string;
		}
		export interface QueryParameters {
			code: /* Quick connect code to authorize. */ Parameters.Code;
		}
		namespace Responses {
			export type $200 = boolean;
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace Available {
		namespace Parameters {
			/**
			 * New MediaBrowser.Model.QuickConnect.QuickConnectState.
			 */
			export type Status = /* Quick connect state. */ Components.Schemas.QuickConnectState;
		}
		export interface QueryParameters {
			status?: /* New MediaBrowser.Model.QuickConnect.QuickConnectState. */ Parameters.Status;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CancelPackageInstallation {
		namespace Parameters {
			/**
			 * Installation Id.
			 */
			export type PackageId = string; // uuid
		}
		export interface PathParameters {
			packageId: /* Installation Id. */ Parameters.PackageId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CancelSeriesTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CancelTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CloseLiveStream {
		namespace Parameters {
			/**
			 * The livestream id.
			 */
			export type LiveStreamId = string;
		}
		export interface QueryParameters {
			liveStreamId: /* The livestream id. */ Parameters.LiveStreamId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CompleteWizard {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace Connect {
		namespace Parameters {
			/**
			 * Secret previously returned from the Initiate endpoint.
			 */
			export type Secret = string;
		}
		export interface QueryParameters {
			secret: /* Secret previously returned from the Initiate endpoint. */ Parameters.Secret;
		}
		namespace Responses {
			export type $200 = /* Stores the result of an incoming quick connect request. */ Components.Schemas.QuickConnectResult;
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace CreateAdminNotification {
		namespace Parameters {
			/**
			 * The description of the notification.
			 */
			export type Description = string;
			/**
			 * The level of the notification.
			 */
			export type Level = Components.Schemas.NotificationLevel;
			/**
			 * The name of the notification.
			 */
			export type Name = string;
			/**
			 * The URL of the notification.
			 */
			export type Url = string;
		}
		export interface QueryParameters {
			url?: /* The URL of the notification. */ Parameters.Url;
			level?: /* The level of the notification. */ Parameters.Level;
			name?: /* The name of the notification. */ Parameters.Name;
			description?: /* The description of the notification. */ Parameters.Description;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateCollection {
		namespace Parameters {
			/**
			 * Item Ids to add to the collection.
			 */
			export type Ids = string[];
			/**
			 * Whether or not to lock the new collection.
			 */
			export type IsLocked = boolean;
			/**
			 * The name of the collection.
			 */
			export type Name = string;
			/**
			 * Optional. Create the collection within a specific folder.
			 */
			export type ParentId = string; // uuid
		}
		export interface QueryParameters {
			name?: /* The name of the collection. */ Parameters.Name;
			ids?: /* Item Ids to add to the collection. */ Parameters.Ids;
			parentId?: /* Optional. Create the collection within a specific folder. */ Parameters.ParentId /* uuid */;
			isLocked?: /* Whether or not to lock the new collection. */ Parameters.IsLocked;
		}
		namespace Responses {
			export type $200 = Components.Schemas.CollectionCreationResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateKey {
		namespace Parameters {
			/**
			 * Name of the app using the authentication key.
			 */
			export type App = string;
		}
		export interface QueryParameters {
			app: /* Name of the app using the authentication key. */ Parameters.App;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreatePlaylist {
		namespace Parameters {
			/**
			 * The item ids.
			 */
			export type Ids = string /* uuid */[];
			/**
			 * The media type.
			 */
			export type MediaType = string;
			/**
			 * The playlist name.
			 */
			export type Name = string;
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			name?: /* The playlist name. */ Parameters.Name;
			ids?: /* The item ids. */ Parameters.Ids;
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			mediaType?: /* The media type. */ Parameters.MediaType;
		}
		/**
		 * The create playlist payload.
		 */
		export type RequestBody = /* Create new playlist dto. */ Components.Schemas.CreatePlaylistDto;
		namespace Responses {
			export type $200 = Components.Schemas.PlaylistCreationResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateProfile {
		/**
		 * Device profile.
		 */
		export type RequestBody = /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ Components.Schemas.DeviceProfile;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateSeriesTimer {
		/**
		 * New series timer info.
		 */
		export type RequestBody = /* Class SeriesTimerInfoDto. */ Components.Schemas.SeriesTimerInfoDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateTimer {
		/**
		 * New timer info.
		 */
		export type RequestBody = Components.Schemas.TimerInfoDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace CreateUserByName {
		/**
		 * The create user by name request body.
		 */
		export type RequestBody = /* The create user by name request body. */ Components.Schemas.CreateUserByName;
		namespace Responses {
			export type $200 = /* Class UserDto. */ Components.Schemas.UserDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace Deauthorize {
		namespace Responses {
			export type $200 = number; // int32
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DeleteAlternateSources {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteDevice {
		namespace Parameters {
			/**
			 * Device Id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id: /* Device Id. */ Parameters.Id;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteItem {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export type $401 = Components.Schemas.ProblemDetails;
			export interface $403 {}
		}
	}
	namespace DeleteItemImage {
		namespace Parameters {
			/**
			 * The image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			imageIndex?: /* The image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteItemImageByIndex {
		namespace Parameters {
			/**
			 * The image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* The image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteItems {
		namespace Parameters {
			/**
			 * The item ids.
			 */
			export type Ids = string /* uuid */[];
		}
		export interface QueryParameters {
			ids?: /* The item ids. */ Parameters.Ids;
		}
		namespace Responses {
			export interface $204 {}
			export type $401 = Components.Schemas.ProblemDetails;
			export interface $403 {}
		}
	}
	namespace DeleteListingProvider {
		namespace Parameters {
			/**
			 * Listing provider id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id?: /* Listing provider id. */ Parameters.Id;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DeleteProfile {
		namespace Parameters {
			/**
			 * Profile id.
			 */
			export type ProfileId = string;
		}
		export interface PathParameters {
			profileId: /* Profile id. */ Parameters.ProfileId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteRecording {
		namespace Parameters {
			/**
			 * Recording id.
			 */
			export type RecordingId = string; // uuid
		}
		export interface PathParameters {
			recordingId: /* Recording id. */ Parameters.RecordingId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteSubtitle {
		namespace Parameters {
			/**
			 * The index of the subtitle file.
			 */
			export type Index = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			index: /* The index of the subtitle file. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteTunerHost {
		namespace Parameters {
			/**
			 * Tuner host id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id?: /* Tuner host id. */ Parameters.Id;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DeleteUser {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteUserImage {
		namespace Parameters {
			/**
			 * (Unused) Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * (Unused) Image index.
			 */
			export type Index = number; // int32
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User Id. */ Parameters.UserId /* uuid */;
			imageType: /* (Unused) Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			index?: /* (Unused) Image index. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteUserImageByIndex {
		namespace Parameters {
			/**
			 * (Unused) Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * (Unused) Image index.
			 */
			export type Index = number; // int32
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User Id. */ Parameters.UserId /* uuid */;
			imageType: /* (Unused) Image type. */ Parameters.ImageType;
			index: /* (Unused) Image index. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DeleteUserItemRating {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DisablePlugin {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
			/**
			 * Plugin version.
			 */
			export type Version = Components.Schemas.Version;
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
			version: /* Plugin version. */ Parameters.Version;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DiscoverTuners {
		namespace Parameters {
			/**
			 * Only discover new tuners.
			 */
			export type NewDevicesOnly = boolean;
		}
		export interface QueryParameters {
			newDevicesOnly?: /* Only discover new tuners. */ Parameters.NewDevicesOnly;
		}
		namespace Responses {
			export type $200 = Components.Schemas.TunerHostInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DiscvoverTuners {
		namespace Parameters {
			/**
			 * Only discover new tuners.
			 */
			export type NewDevicesOnly = boolean;
		}
		export interface QueryParameters {
			newDevicesOnly?: /* Only discover new tuners. */ Parameters.NewDevicesOnly;
		}
		namespace Responses {
			export type $200 = Components.Schemas.TunerHostInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DisplayContent {
		namespace Parameters {
			/**
			 * The Id of the item.
			 */
			export type ItemId = string;
			/**
			 * The name of the item.
			 */
			export type ItemName = string;
			/**
			 * The type of item to browse to.
			 */
			export type ItemType = string;
			/**
			 * The session Id.
			 */
			export type SessionId = string;
		}
		export interface PathParameters {
			sessionId: /* The session Id. */ Parameters.SessionId;
		}
		export interface QueryParameters {
			itemType: /* The type of item to browse to. */ Parameters.ItemType;
			itemId: /* The Id of the item. */ Parameters.ItemId;
			itemName: /* The name of the item. */ Parameters.ItemName;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace DownloadRemoteImage {
		namespace Parameters {
			/**
			 * The image url.
			 */
			export type ImageUrl = string;
			/**
			 * Item Id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The image type.
			 */
			export type Type = /* Enum ImageType. */ Components.Schemas.ImageType;
		}
		export interface PathParameters {
			itemId: /* Item Id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			type: /* The image type. */ Parameters.Type;
			imageUrl?: /* The image url. */ Parameters.ImageUrl;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace DownloadRemoteSubtitles {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The subtitle id.
			 */
			export type SubtitleId = string;
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			subtitleId: /* The subtitle id. */ Parameters.SubtitleId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace EnablePlugin {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
			/**
			 * Plugin version.
			 */
			export type Version = Components.Schemas.Version;
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
			version: /* Plugin version. */ Parameters.Version;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace ForgotPassword {
		/**
		 * The forgot password request containing the entered username.
		 */
		export type RequestBody = /* Forgot Password request body DTO. */ Components.Schemas.ForgotPasswordDto;
		namespace Responses {
			export type $200 = Components.Schemas.ForgotPasswordResult;
		}
	}
	namespace ForgotPasswordPin {
		/**
		 * The forgot password pin request containing the entered pin.
		 */
		export type RequestBody = /* Forgot Password Pin enter request body DTO. */ Components.Schemas.ForgotPasswordPinDto;
		namespace Responses {
			export type $200 = Components.Schemas.PinRedeemResult;
		}
	}
	namespace Get {
		namespace Parameters {
			/**
			 * If specified, results with these item types are filtered out. This allows multiple, comma delimeted.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional filter whether to include artists.
			 */
			export type IncludeArtists = boolean;
			/**
			 * Optional filter whether to include genres.
			 */
			export type IncludeGenres = boolean;
			/**
			 * If specified, only results with the specified item types are returned. This allows multiple, comma delimeted.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter whether to include media.
			 */
			export type IncludeMedia = boolean;
			/**
			 * Optional filter whether to include people.
			 */
			export type IncludePeople = boolean;
			/**
			 * Optional filter whether to include studios.
			 */
			export type IncludeStudios = boolean;
			/**
			 * Optional filter for kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional filter for movies.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional filter for news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional filter for series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional filter for sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * If specified, only results with the specified media types are returned. This allows multiple, comma delimeted.
			 */
			export type MediaTypes = string[];
			/**
			 * If specified, only children of the parent are returned.
			 */
			export type ParentId = string; // uuid
			/**
			 * The search term to filter on.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Supply a user id to search within a user's library or omit to search all.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			userId?: /* Optional. Supply a user id to search within a user's library or omit to search all. */ Parameters.UserId /* uuid */;
			searchTerm: /* The search term to filter on. */ Parameters.SearchTerm;
			includeItemTypes?: /* If specified, only results with the specified item types are returned. This allows multiple, comma delimeted. */ Parameters.IncludeItemTypes;
			excludeItemTypes?: /* If specified, results with these item types are filtered out. This allows multiple, comma delimeted. */ Parameters.ExcludeItemTypes;
			mediaTypes?: /* If specified, only results with the specified media types are returned. This allows multiple, comma delimeted. */ Parameters.MediaTypes;
			parentId?: /* If specified, only children of the parent are returned. */ Parameters.ParentId /* uuid */;
			isMovie?: /* Optional filter for movies. */ Parameters.IsMovie;
			isSeries?: /* Optional filter for series. */ Parameters.IsSeries;
			isNews?: /* Optional filter for news. */ Parameters.IsNews;
			isKids?: /* Optional filter for kids. */ Parameters.IsKids;
			isSports?: /* Optional filter for sports. */ Parameters.IsSports;
			includePeople?: /* Optional filter whether to include people. */ Parameters.IncludePeople;
			includeMedia?: /* Optional filter whether to include media. */ Parameters.IncludeMedia;
			includeGenres?: /* Optional filter whether to include genres. */ Parameters.IncludeGenres;
			includeStudios?: /* Optional filter whether to include studios. */ Parameters.IncludeStudios;
			includeArtists?: /* Optional filter whether to include artists. */ Parameters.IncludeArtists;
		}
		namespace Responses {
			export type $200 = /* Class SearchHintResult. */ Components.Schemas.SearchHintResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetAdditionalPart {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetAlbumArtists {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
			 */
			export type Genres = string[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional filter by minimum community rating.
			 */
			export type MinCommunityRating = number; // double
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
			 */
			export type OfficialRatings = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person.
			 */
			export type Person = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person ids.
			 */
			export type PersonIds = string /* uuid */[];
			/**
			 * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * Optional. Search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
			 */
			export type StudioIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
			 */
			export type Studios = string[];
			/**
			 * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
			 */
			export type Tags = string[];
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
			 */
			export type Years = number /* int32 */[];
		}
		export interface QueryParameters {
			minCommunityRating?: /* Optional filter by minimum community rating. */ Parameters.MinCommunityRating /* double */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* Optional. Search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			filters?: /* Optional. Specify additional filters to apply. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			mediaTypes?: /* Optional filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			genres?: /* Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited. */ Parameters.Genres;
			genreIds?: /* Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited. */ Parameters.GenreIds;
			officialRatings?: /* Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited. */ Parameters.OfficialRatings;
			tags?: /* Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited. */ Parameters.Tags;
			years?: /* Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited. */ Parameters.Years;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			person?: /* Optional. If specified, results will be filtered to include only those containing the specified person. */ Parameters.Person;
			personIds?: /* Optional. If specified, results will be filtered to include only those containing the specified person ids. */ Parameters.PersonIds;
			personTypes?: /* Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			studios?: /* Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited. */ Parameters.Studios;
			studioIds?: /* Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited. */ Parameters.StudioIds;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			enableTotalRecordCount?: /* Total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetAllChannelFeatures {
		namespace Responses {
			export type $200 = Components.Schemas.ChannelFeatures[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetAncestors {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto[];
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetArtistByName {
		namespace Parameters {
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetArtistImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Artist name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Artist name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetArtists {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
			 */
			export type Genres = string[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional filter by minimum community rating.
			 */
			export type MinCommunityRating = number; // double
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
			 */
			export type OfficialRatings = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person.
			 */
			export type Person = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person ids.
			 */
			export type PersonIds = string /* uuid */[];
			/**
			 * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * Optional. Search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
			 */
			export type StudioIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
			 */
			export type Studios = string[];
			/**
			 * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
			 */
			export type Tags = string[];
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
			 */
			export type Years = number /* int32 */[];
		}
		export interface QueryParameters {
			minCommunityRating?: /* Optional filter by minimum community rating. */ Parameters.MinCommunityRating /* double */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* Optional. Search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			filters?: /* Optional. Specify additional filters to apply. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			mediaTypes?: /* Optional filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			genres?: /* Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited. */ Parameters.Genres;
			genreIds?: /* Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited. */ Parameters.GenreIds;
			officialRatings?: /* Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited. */ Parameters.OfficialRatings;
			tags?: /* Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited. */ Parameters.Tags;
			years?: /* Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited. */ Parameters.Years;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			person?: /* Optional. If specified, results will be filtered to include only those containing the specified person. */ Parameters.Person;
			personIds?: /* Optional. If specified, results will be filtered to include only those containing the specified person ids. */ Parameters.PersonIds;
			personTypes?: /* Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			studios?: /* Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited. */ Parameters.Studios;
			studioIds?: /* Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited. */ Parameters.StudioIds;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			enableTotalRecordCount?: /* Total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetAttachment {
		namespace Parameters {
			/**
			 * Attachment Index.
			 */
			export type Index = number; // int32
			/**
			 * Media Source ID.
			 */
			export type MediaSourceId = string;
			/**
			 * Video ID.
			 */
			export type VideoId = string; // uuid
		}
		export interface PathParameters {
			videoId: /* Video ID. */ Parameters.VideoId /* uuid */;
			mediaSourceId: /* Media Source ID. */ Parameters.MediaSourceId;
			index: /* Attachment Index. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export type $200 = string; // binary
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetAudioStream {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The audio container.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* The audio container. */ Parameters.Container;
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace GetAudioStreamByContainer {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The audio container.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamporphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			container: /* The audio container. */ Parameters.Container;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamporphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace GetAuthProviders {
		namespace Responses {
			export type $200 = Components.Schemas.NameIdPair[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetBitrateTestBytes {
		namespace Parameters {
			/**
			 * The bitrate. Defaults to 102400.
			 */
			export type Size = number; // int32
		}
		export interface QueryParameters {
			size?: /* The bitrate. Defaults to 102400. */ Parameters.Size /* int32 */;
		}
		namespace Responses {
			export type $200 = string; // binary
			export type $400 = Components.Schemas.ProblemDetails;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetBookRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.BookInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetBoxSetRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.BoxSetInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetBrandingCss {
		namespace Responses {
			export type $200 = string;
			export interface $204 {}
		}
	}
	namespace GetBrandingCss2 {
		namespace Responses {
			export type $200 = string;
			export interface $204 {}
		}
	}
	namespace GetBrandingOptions {
		namespace Responses {
			export type $200 = Components.Schemas.BrandingOptions;
		}
	}
	namespace GetChannel {
		namespace Parameters {
			/**
			 * Channel id.
			 */
			export type ChannelId = string; // uuid
			/**
			 * Optional. Attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			channelId: /* Channel id. */ Parameters.ChannelId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetChannelFeatures {
		namespace Parameters {
			/**
			 * Channel id.
			 */
			export type ChannelId = string; // uuid
		}
		export interface PathParameters {
			channelId: /* Channel id. */ Parameters.ChannelId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.ChannelFeatures;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetChannelItems {
		namespace Parameters {
			/**
			 * Channel Id.
			 */
			export type ChannelId = string; // uuid
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. Folder Id.
			 */
			export type FolderId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string[];
			/**
			 * Optional. Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			channelId: /* Channel Id. */ Parameters.ChannelId /* uuid */;
		}
		export interface QueryParameters {
			folderId?: /* Optional. Folder Id. */ Parameters.FolderId /* uuid */;
			userId?: /* Optional. User Id. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			sortOrder?: /* Optional. Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			filters?: /* Optional. Specify additional filters to apply. */ Parameters.Filters;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetChannelMappingOptions {
		namespace Parameters {
			/**
			 * Provider id.
			 */
			export type ProviderId = string;
		}
		export interface QueryParameters {
			providerId?: /* Provider id. */ Parameters.ProviderId;
		}
		namespace Responses {
			export type $200 = /* Channel mapping options dto. */ Components.Schemas.ChannelMappingOptionsDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetChannels {
		namespace Parameters {
			/**
			 * Optional. Filter by channels that are favorite.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Filter by channels that support getting latest items.
			 */
			export type SupportsLatestItems = boolean;
			/**
			 * Optional. Filter by channels that support media deletion.
			 */
			export type SupportsMediaDeletion = boolean;
			/**
			 * User Id to filter by. Use System.Guid.Empty to not filter by user.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* User Id to filter by. Use System.Guid.Empty to not filter by user. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			supportsLatestItems?: /* Optional. Filter by channels that support getting latest items. */ Parameters.SupportsLatestItems;
			supportsMediaDeletion?: /* Optional. Filter by channels that support media deletion. */ Parameters.SupportsMediaDeletion;
			isFavorite?: /* Optional. Filter by channels that are favorite. */ Parameters.IsFavorite;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetConfiguration {
		namespace Responses {
			export type $200 = /* Represents the server configuration. */ Components.Schemas.ServerConfiguration;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetConfigurationPages {
		namespace Parameters {
			/**
			 * Whether to enable in the main menu.
			 */
			export type EnableInMainMenu = boolean;
			/**
			 * The Jellyfin.Api.Models.ConfigurationPageInfo.
			 */
			export type PageType = /* Enum ConfigurationPageType. */ Components.Schemas.ConfigurationPageType;
		}
		export interface QueryParameters {
			enableInMainMenu?: /* Whether to enable in the main menu. */ Parameters.EnableInMainMenu;
			pageType?: /* The Jellyfin.Api.Models.ConfigurationPageInfo. */ Parameters.PageType;
		}
		namespace Responses {
			export type $200 = /* The configuration page info. */ Components.Schemas.ConfigurationPageInfo[];
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetConnectionManager {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetConnectionManager2 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetConnectionManager3 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetContentDirectory {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetContentDirectory2 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetContentDirectory3 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetCountries {
		namespace Responses {
			export type $200 = /* Class CountryInfo. */ Components.Schemas.CountryInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetCriticReviews {
		namespace Parameters {
			export type ItemId = string;
		}
		export interface PathParameters {
			itemId: Parameters.ItemId;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetCultures {
		namespace Responses {
			export type $200 = /* Class CultureDto. */ Components.Schemas.CultureDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetCurrentUser {
		namespace Responses {
			export type $200 = /* Class UserDto. */ Components.Schemas.UserDto;
			export type $400 = Components.Schemas.ProblemDetails;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDashboardConfigurationPage {
		namespace Parameters {
			/**
			 * The name of the page.
			 */
			export type Name = string;
		}
		export interface QueryParameters {
			name?: /* The name of the page. */ Parameters.Name;
		}
		namespace Responses {
			export type $200 = string; // binary
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetDefaultDirectoryBrowser {
		namespace Responses {
			export type $200 = /* Default directory browser info. */ Components.Schemas.DefaultDirectoryBrowserInfoDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDefaultListingProvider {
		namespace Responses {
			export type $200 = Components.Schemas.ListingsProviderInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDefaultMetadataOptions {
		namespace Responses {
			export type $200 = /* Class MetadataOptions. */ Components.Schemas.MetadataOptions;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDefaultProfile {
		namespace Responses {
			export type $200 = /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ Components.Schemas.DeviceProfile;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDefaultTimer {
		namespace Parameters {
			/**
			 * Optional. To attach default values based on a program.
			 */
			export type ProgramId = string;
		}
		export interface QueryParameters {
			programId?: /* Optional. To attach default values based on a program. */ Parameters.ProgramId;
		}
		namespace Responses {
			export type $200 = /* Class SeriesTimerInfoDto. */ Components.Schemas.SeriesTimerInfoDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDescriptionXml {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetDescriptionXml2 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetDeviceInfo {
		namespace Parameters {
			/**
			 * Device Id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id: /* Device Id. */ Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.DeviceInfo;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetDeviceOptions {
		namespace Parameters {
			/**
			 * Device Id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id: /* Device Id. */ Parameters.Id;
		}
		namespace Responses {
			export type $200 = Components.Schemas.DeviceOptions;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetDevices {
		namespace Parameters {
			/**
			 * Gets or sets a value indicating whether [supports synchronize].
			 */
			export type SupportsSync = boolean;
			/**
			 * Gets or sets the user identifier.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			supportsSync?: /* Gets or sets a value indicating whether [supports synchronize]. */ Parameters.SupportsSync;
			userId?: /* Gets or sets the user identifier. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.DeviceInfoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDirectoryContents {
		namespace Parameters {
			/**
			 * An optional filter to include or exclude folders from the results. true/false.
			 */
			export type IncludeDirectories = boolean;
			/**
			 * An optional filter to include or exclude files from the results. true/false.
			 */
			export type IncludeFiles = boolean;
			/**
			 * The path.
			 */
			export type Path = string;
		}
		export interface QueryParameters {
			path: /* The path. */ Parameters.Path;
			includeFiles?: /* An optional filter to include or exclude files from the results. true/false. */ Parameters.IncludeFiles;
			includeDirectories?: /* An optional filter to include or exclude folders from the results. true/false. */ Parameters.IncludeDirectories;
		}
		namespace Responses {
			export type $200 = /* Class FileSystemEntryInfo. */ Components.Schemas.FileSystemEntryInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDisplayPreferences {
		namespace Parameters {
			/**
			 * Client.
			 */
			export type Client = string;
			/**
			 * Display preferences id.
			 */
			export type DisplayPreferencesId = string;
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			displayPreferencesId: /* Display preferences id. */ Parameters.DisplayPreferencesId;
		}
		export interface QueryParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			client: /* Client. */ Parameters.Client;
		}
		namespace Responses {
			export type $200 = /* Defines the display preferences for any item that supports them (usually Folders). */ Components.Schemas.DisplayPreferencesDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetDownload {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetDrives {
		namespace Responses {
			export type $200 = /* Class FileSystemEntryInfo. */ Components.Schemas.FileSystemEntryInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetEndpointInfo {
		namespace Responses {
			export type $200 = Components.Schemas.EndPointInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetEpisodes {
		namespace Parameters {
			/**
			 * Optional. Return items that are siblings of a supplied item.
			 */
			export type AdjacentTo = string;
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by items that are missing episodes or not.
			 */
			export type IsMissing = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by season number.
			 */
			export type Season = number; // int32
			/**
			 * Optional. Filter by season id.
			 */
			export type SeasonId = string; // uuid
			/**
			 * The series id.
			 */
			export type SeriesId = string; // uuid
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Skip through the list until a given item is found.
			 */
			export type StartItemId = string; // uuid
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			seriesId: /* The series id. */ Parameters.SeriesId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
			season?: /* Optional filter by season number. */ Parameters.Season /* int32 */;
			seasonId?: /* Optional. Filter by season id. */ Parameters.SeasonId /* uuid */;
			isMissing?: /* Optional. Filter by items that are missing episodes or not. */ Parameters.IsMissing;
			adjacentTo?: /* Optional. Return items that are siblings of a supplied item. */ Parameters.AdjacentTo;
			startItemId?: /* Optional. Skip through the list until a given item is found. */ Parameters.StartItemId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetExternalIdInfos {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Represents the external id information for serialization to the client. */ Components.Schemas.ExternalIdInfo[];
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetFallbackFont {
		namespace Parameters {
			/**
			 * The name of the fallback font file to get.
			 */
			export type Name = string;
		}
		export interface PathParameters {
			name: /* The name of the fallback font file to get. */ Parameters.Name;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetFallbackFontList {
		namespace Responses {
			export type $200 = /* Class FontFile. */ Components.Schemas.FontFile[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetFile {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetFirstUser {
		namespace Responses {
			export type $200 = /* The startup user DTO. */ Components.Schemas.StartupUserDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetFirstUser2 {
		namespace Responses {
			export type $200 = /* The startup user DTO. */ Components.Schemas.StartupUserDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetGeneralImage {
		namespace Parameters {
			/**
			 * The name of the image.
			 */
			export type Name = string;
			/**
			 * Image Type (primary, backdrop, logo, etc).
			 */
			export type Type = string;
		}
		export interface PathParameters {
			name: /* The name of the image. */ Parameters.Name;
			type: /* Image Type (primary, backdrop, logo, etc). */ Parameters.Type;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetGeneralImages {
		namespace Responses {
			export type $200 = Components.Schemas.ImageByNameInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetGenre {
		namespace Parameters {
			/**
			 * The genre name.
			 */
			export type GenreName = string;
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			genreName: /* The genre name. */ Parameters.GenreName;
		}
		export interface QueryParameters {
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetGenreImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetGenreImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetGenres {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * The search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* The search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			enableTotalRecordCount?: /* Optional. Include total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetGroupingOptions {
		namespace Parameters {
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Special view option dto. */ Components.Schemas.SpecialViewOptionDto[];
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetGuideInfo {
		namespace Responses {
			export type $200 = Components.Schemas.GuideInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetHlsAudioSegment {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment id.
			 */
			export type SegmentId = number; // int32
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
			segmentId: /* The segment id. */ Parameters.SegmentId /* int32 */;
			container: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetHlsAudioSegmentLegacyAac {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string;
			/**
			 * The segment id.
			 */
			export type SegmentId = string;
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId;
			segmentId: /* The segment id. */ Parameters.SegmentId;
		}
	}
	namespace GetHlsAudioSegmentLegacyMp3 {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string;
			/**
			 * The segment id.
			 */
			export type SegmentId = string;
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId;
			segmentId: /* The segment id. */ Parameters.SegmentId;
		}
	}
	namespace GetHlsPlaylistLegacy {
		namespace Parameters {
			/**
			 * The video id.
			 */
			export type ItemId = string;
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
		}
		export interface PathParameters {
			itemId: /* The video id. */ Parameters.ItemId;
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetHlsVideoSegment {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment id.
			 */
			export type SegmentId = number; // int32
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
			segmentId: /* The segment id. */ Parameters.SegmentId /* int32 */;
			container: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetHlsVideoSegmentLegacy {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string;
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment id.
			 */
			export type SegmentId = string;
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId;
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
			segmentId: /* The segment id. */ Parameters.SegmentId;
			segmentContainer: /* The segment container. */ Parameters.SegmentContainer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetIcon {
		namespace Parameters {
			/**
			 * The icon filename.
			 */
			export type FileName = string;
		}
		export interface PathParameters {
			fileName: /* The icon filename. */ Parameters.FileName;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
			export interface $503 {}
		}
	}
	namespace GetIconId {
		namespace Parameters {
			/**
			 * The icon filename.
			 */
			export type FileName = string;
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
			fileName: /* The icon filename. */ Parameters.FileName;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
			export interface $503 {}
		}
	}
	namespace GetInstantMixFromAlbum {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromArtists {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromItem {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromMusicGenre {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * The genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			name: /* The genre name. */ Parameters.Name;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromMusicGenres {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromPlaylist {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetInstantMixFromSong {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type Id = string; // uuid
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetIntros {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetItem {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetItemCounts {
		namespace Parameters {
			/**
			 * Optional. Get counts of favorite items.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. Get counts from a specific user's library.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. Get counts from a specific user's library. */ Parameters.UserId /* uuid */;
			isFavorite?: /* Optional. Get counts of favorite items. */ Parameters.IsFavorite;
		}
		namespace Responses {
			export type $200 = /* Class LibrarySummary. */ Components.Schemas.ItemCounts;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetItemImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			format?: /* Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image. */ Parameters.Format;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetItemImage2 {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			maxWidth: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			tag: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			percentPlayed: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetItemImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			format?: /* Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image. */ Parameters.Format;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetItemImageInfos {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class ImageInfo. */ Components.Schemas.ImageInfo[];
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetItems {
		namespace Parameters {
			/**
			 * Optional. Return items that are siblings of a supplied item.
			 */
			export type AdjacentTo = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified album artist id.
			 */
			export type AlbumArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.
			 */
			export type AlbumIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.
			 */
			export type Albums = string[];
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified artist id.
			 */
			export type ArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.
			 */
			export type Artists = string[];
			/**
			 * Whether or not to hide items behind their boxsets.
			 */
			export type CollapseBoxSetItems = boolean;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
			 */
			export type ContributingArtistIds = string /* uuid */[];
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Enable the total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.
			 */
			export type ExcludeItemIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.
			 */
			export type ExcludeLocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
			 */
			export type Genres = string[];
			/**
			 * Optional filter by items that have an imdb id or not.
			 */
			export type HasImdbId = boolean;
			/**
			 * Optional filter by items that have official ratings.
			 */
			export type HasOfficialRating = boolean;
			/**
			 * Optional filter by items that have an overview or not.
			 */
			export type HasOverview = boolean;
			/**
			 * Optional filter by items that have or do not have a parental rating.
			 */
			export type HasParentalRating = boolean;
			/**
			 * Optional filter by items with special features.
			 */
			export type HasSpecialFeature = boolean;
			/**
			 * Optional filter by items with subtitles.
			 */
			export type HasSubtitles = boolean;
			/**
			 * Optional filter by items with theme songs.
			 */
			export type HasThemeSong = boolean;
			/**
			 * Optional filter by items with theme videos.
			 */
			export type HasThemeVideo = boolean;
			/**
			 * Optional filter by items that have a tmdb id or not.
			 */
			export type HasTmdbId = boolean;
			/**
			 * Optional filter by items with trailers.
			 */
			export type HasTrailer = boolean;
			/**
			 * Optional filter by items that have a tvdb id or not.
			 */
			export type HasTvdbId = boolean;
			/**
			 * Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
			 */
			export type Ids = string /* uuid */[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
			 */
			export type ImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are 3D, or not.
			 */
			export type Is3D = boolean;
			/**
			 * Optional filter by items that are 4K or not.
			 */
			export type Is4K = boolean;
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional filter by items that are HD or not.
			 */
			export type IsHd = boolean;
			/**
			 * Optional filter by items that are locked.
			 */
			export type IsLocked = boolean;
			/**
			 * Optional filter by items that are missing episodes or not.
			 */
			export type IsMissing = boolean;
			/**
			 * Optional filter by items that are placeholders.
			 */
			export type IsPlaceHolder = boolean;
			/**
			 * Optional filter by items that are played, or not.
			 */
			export type IsPlayed = boolean;
			/**
			 * Optional filter by items that are unaired episodes or not.
			 */
			export type IsUnaired = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.
			 */
			export type LocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Filter by the maximum height of the item.
			 */
			export type MaxHeight = number; // int32
			/**
			 * Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MaxOfficialRating = string;
			/**
			 * Optional. The maximum premiere date. Format = ISO.
			 */
			export type MaxPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the maximum width of the item.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional filter by minimum community rating.
			 */
			export type MinCommunityRating = number; // double
			/**
			 * Optional filter by minimum critic rating.
			 */
			export type MinCriticRating = number; // double
			/**
			 * Optional. The minimum last saved date. Format = ISO.
			 */
			export type MinDateLastSaved = string; // date-time
			/**
			 * Optional. The minimum last saved date for the current user. Format = ISO.
			 */
			export type MinDateLastSavedForUser = string; // date-time
			/**
			 * Optional. Filter by the minimum height of the item.
			 */
			export type MinHeight = number; // int32
			/**
			 * Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MinOfficialRating = string;
			/**
			 * Optional. The minimum premiere date. Format = ISO.
			 */
			export type MinPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the minimum width of the item.
			 */
			export type MinWidth = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
			 */
			export type OfficialRatings = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional filter by parent index number.
			 */
			export type ParentIndexNumber = number; // int32
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person.
			 */
			export type Person = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person id.
			 */
			export type PersonIds = string /* uuid */[];
			/**
			 * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * When searching within folders, this determines whether or not the search will be recursive. true/false.
			 */
			export type Recursive = boolean;
			/**
			 * Optional. Filter based on a search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional filter by Series Status. Allows multiple, comma delimited.
			 */
			export type SeriesStatus = /* Enum SeriesStatus. */ Components.Schemas.SeriesStatus[];
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string[];
			/**
			 * Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
			 */
			export type StudioIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
			 */
			export type Studios = string[];
			/**
			 * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
			 */
			export type Tags = string[];
			/**
			 * The user id supplied as query parameter.
			 */
			export type UserId = string; // uuid
			/**
			 * Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.
			 */
			export type VideoTypes = /* Enum VideoType. */ Components.Schemas.VideoType[];
			/**
			 * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
			 */
			export type Years = number /* int32 */[];
		}
		export interface QueryParameters {
			userId?: /* The user id supplied as query parameter. */ Parameters.UserId /* uuid */;
			maxOfficialRating?: /* Optional filter by maximum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MaxOfficialRating;
			hasThemeSong?: /* Optional filter by items with theme songs. */ Parameters.HasThemeSong;
			hasThemeVideo?: /* Optional filter by items with theme videos. */ Parameters.HasThemeVideo;
			hasSubtitles?: /* Optional filter by items with subtitles. */ Parameters.HasSubtitles;
			hasSpecialFeature?: /* Optional filter by items with special features. */ Parameters.HasSpecialFeature;
			hasTrailer?: /* Optional filter by items with trailers. */ Parameters.HasTrailer;
			adjacentTo?: /* Optional. Return items that are siblings of a supplied item. */ Parameters.AdjacentTo;
			parentIndexNumber?: /* Optional filter by parent index number. */ Parameters.ParentIndexNumber /* int32 */;
			hasParentalRating?: /* Optional filter by items that have or do not have a parental rating. */ Parameters.HasParentalRating;
			isHd?: /* Optional filter by items that are HD or not. */ Parameters.IsHd;
			is4K?: /* Optional filter by items that are 4K or not. */ Parameters.Is4K;
			locationTypes?: /* Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited. */ Parameters.LocationTypes;
			excludeLocationTypes?: /* Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited. */ Parameters.ExcludeLocationTypes;
			isMissing?: /* Optional filter by items that are missing episodes or not. */ Parameters.IsMissing;
			isUnaired?: /* Optional filter by items that are unaired episodes or not. */ Parameters.IsUnaired;
			minCommunityRating?: /* Optional filter by minimum community rating. */ Parameters.MinCommunityRating /* double */;
			minCriticRating?: /* Optional filter by minimum critic rating. */ Parameters.MinCriticRating /* double */;
			minPremiereDate?: /* Optional. The minimum premiere date. Format = ISO. */ Parameters.MinPremiereDate /* date-time */;
			minDateLastSaved?: /* Optional. The minimum last saved date. Format = ISO. */ Parameters.MinDateLastSaved /* date-time */;
			minDateLastSavedForUser?: /* Optional. The minimum last saved date for the current user. Format = ISO. */ Parameters.MinDateLastSavedForUser /* date-time */;
			maxPremiereDate?: /* Optional. The maximum premiere date. Format = ISO. */ Parameters.MaxPremiereDate /* date-time */;
			hasOverview?: /* Optional filter by items that have an overview or not. */ Parameters.HasOverview;
			hasImdbId?: /* Optional filter by items that have an imdb id or not. */ Parameters.HasImdbId;
			hasTmdbId?: /* Optional filter by items that have a tmdb id or not. */ Parameters.HasTmdbId;
			hasTvdbId?: /* Optional filter by items that have a tvdb id or not. */ Parameters.HasTvdbId;
			excludeItemIds?: /* Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited. */ Parameters.ExcludeItemIds;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			recursive?: /* When searching within folders, this determines whether or not the search will be recursive. true/false. */ Parameters.Recursive;
			searchTerm?: /* Optional. Filter based on a search term. */ Parameters.SearchTerm;
			sortOrder?: /* Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			filters?: /* Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			mediaTypes?: /* Optional filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			imageTypes?: /* Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited. */ Parameters.ImageTypes;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
			isPlayed?: /* Optional filter by items that are played, or not. */ Parameters.IsPlayed;
			genres?: /* Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited. */ Parameters.Genres;
			officialRatings?: /* Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited. */ Parameters.OfficialRatings;
			tags?: /* Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited. */ Parameters.Tags;
			years?: /* Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited. */ Parameters.Years;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			person?: /* Optional. If specified, results will be filtered to include only those containing the specified person. */ Parameters.Person;
			personIds?: /* Optional. If specified, results will be filtered to include only those containing the specified person id. */ Parameters.PersonIds;
			personTypes?: /* Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			studios?: /* Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited. */ Parameters.Studios;
			artists?: /* Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited. */ Parameters.Artists;
			excludeArtistIds?: /* Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited. */ Parameters.ExcludeArtistIds;
			artistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified artist id. */ Parameters.ArtistIds;
			albumArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified album artist id. */ Parameters.AlbumArtistIds;
			contributingArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified contributing artist id. */ Parameters.ContributingArtistIds;
			albums?: /* Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited. */ Parameters.Albums;
			albumIds?: /* Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited. */ Parameters.AlbumIds;
			ids?: /* Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited. */ Parameters.Ids;
			videoTypes?: /* Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited. */ Parameters.VideoTypes;
			minOfficialRating?: /* Optional filter by minimum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MinOfficialRating;
			isLocked?: /* Optional filter by items that are locked. */ Parameters.IsLocked;
			isPlaceHolder?: /* Optional filter by items that are placeholders. */ Parameters.IsPlaceHolder;
			hasOfficialRating?: /* Optional filter by items that have official ratings. */ Parameters.HasOfficialRating;
			collapseBoxSetItems?: /* Whether or not to hide items behind their boxsets. */ Parameters.CollapseBoxSetItems;
			minWidth?: /* Optional. Filter by the minimum width of the item. */ Parameters.MinWidth /* int32 */;
			minHeight?: /* Optional. Filter by the minimum height of the item. */ Parameters.MinHeight /* int32 */;
			maxWidth?: /* Optional. Filter by the maximum width of the item. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* Optional. Filter by the maximum height of the item. */ Parameters.MaxHeight /* int32 */;
			is3D?: /* Optional filter by items that are 3D, or not. */ Parameters.Is3D;
			seriesStatus?: /* Optional filter by Series Status. Allows multiple, comma delimited. */ Parameters.SeriesStatus;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			studioIds?: /* Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited. */ Parameters.StudioIds;
			genreIds?: /* Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited. */ Parameters.GenreIds;
			enableTotalRecordCount?: /* Optional. Enable the total record count. */ Parameters.EnableTotalRecordCount;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetItemsByUserId {
		namespace Parameters {
			/**
			 * Optional. Return items that are siblings of a supplied item.
			 */
			export type AdjacentTo = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified album artist id.
			 */
			export type AlbumArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimeted.
			 */
			export type AlbumIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimeted.
			 */
			export type Albums = string[];
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified artist id.
			 */
			export type ArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimeted.
			 */
			export type Artists = string[];
			/**
			 * Whether or not to hide items behind their boxsets.
			 */
			export type CollapseBoxSetItems = boolean;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
			 */
			export type ContributingArtistIds = string /* uuid */[];
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Enable the total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimeted.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered by exxcluding item ids. This allows multiple, comma delimeted.
			 */
			export type ExcludeItemIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimeted.
			 */
			export type ExcludeLocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply. This allows multiple, comma delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimeted.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimeted.
			 */
			export type Genres = string[];
			/**
			 * Optional filter by items that have an imdb id or not.
			 */
			export type HasImdbId = boolean;
			/**
			 * Optional filter by items that have official ratings.
			 */
			export type HasOfficialRating = boolean;
			/**
			 * Optional filter by items that have an overview or not.
			 */
			export type HasOverview = boolean;
			/**
			 * Optional filter by items that have or do not have a parental rating.
			 */
			export type HasParentalRating = boolean;
			/**
			 * Optional filter by items with special features.
			 */
			export type HasSpecialFeature = boolean;
			/**
			 * Optional filter by items with subtitles.
			 */
			export type HasSubtitles = boolean;
			/**
			 * Optional filter by items with theme songs.
			 */
			export type HasThemeSong = boolean;
			/**
			 * Optional filter by items with theme videos.
			 */
			export type HasThemeVideo = boolean;
			/**
			 * Optional filter by items that have a tmdb id or not.
			 */
			export type HasTmdbId = boolean;
			/**
			 * Optional filter by items with trailers.
			 */
			export type HasTrailer = boolean;
			/**
			 * Optional filter by items that have a tvdb id or not.
			 */
			export type HasTvdbId = boolean;
			/**
			 * Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
			 */
			export type Ids = string /* uuid */[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
			 */
			export type ImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimeted.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are 3D, or not.
			 */
			export type Is3D = boolean;
			/**
			 * Optional filter by items that are 4K or not.
			 */
			export type Is4K = boolean;
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional filter by items that are HD or not.
			 */
			export type IsHd = boolean;
			/**
			 * Optional filter by items that are locked.
			 */
			export type IsLocked = boolean;
			/**
			 * Optional filter by items that are missing episodes or not.
			 */
			export type IsMissing = boolean;
			/**
			 * Optional filter by items that are placeholders.
			 */
			export type IsPlaceHolder = boolean;
			/**
			 * Optional filter by items that are played, or not.
			 */
			export type IsPlayed = boolean;
			/**
			 * Optional filter by items that are unaired episodes or not.
			 */
			export type IsUnaired = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted.
			 */
			export type LocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Filter by the maximum height of the item.
			 */
			export type MaxHeight = number; // int32
			/**
			 * Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MaxOfficialRating = string;
			/**
			 * Optional. The maximum premiere date. Format = ISO.
			 */
			export type MaxPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the maximum width of the item.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional filter by minimum community rating.
			 */
			export type MinCommunityRating = number; // double
			/**
			 * Optional filter by minimum critic rating.
			 */
			export type MinCriticRating = number; // double
			/**
			 * Optional. The minimum last saved date. Format = ISO.
			 */
			export type MinDateLastSaved = string; // date-time
			/**
			 * Optional. The minimum last saved date for the current user. Format = ISO.
			 */
			export type MinDateLastSavedForUser = string; // date-time
			/**
			 * Optional. Filter by the minimum height of the item.
			 */
			export type MinHeight = number; // int32
			/**
			 * Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MinOfficialRating = string;
			/**
			 * Optional. The minimum premiere date. Format = ISO.
			 */
			export type MinPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the minimum width of the item.
			 */
			export type MinWidth = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimeted.
			 */
			export type OfficialRatings = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional filter by parent index number.
			 */
			export type ParentIndexNumber = number; // int32
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person.
			 */
			export type Person = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person id.
			 */
			export type PersonIds = string /* uuid */[];
			/**
			 * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * When searching within folders, this determines whether or not the search will be recursive. true/false.
			 */
			export type Recursive = boolean;
			/**
			 * Optional. Filter based on a search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional filter by Series Status. Allows multiple, comma delimeted.
			 */
			export type SeriesStatus = /* Enum SeriesStatus. */ Components.Schemas.SeriesStatus[];
			/**
			 * Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string[];
			/**
			 * Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimeted.
			 */
			export type StudioIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted.
			 */
			export type Studios = string[];
			/**
			 * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimeted.
			 */
			export type Tags = string[];
			/**
			 * The user id supplied as query parameter.
			 */
			export type UserId = string; // uuid
			/**
			 * Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimeted.
			 */
			export type VideoTypes = /* Enum VideoType. */ Components.Schemas.VideoType[];
			/**
			 * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimeted.
			 */
			export type Years = number /* int32 */[];
		}
		export interface PathParameters {
			userId: /* The user id supplied as query parameter. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			maxOfficialRating?: /* Optional filter by maximum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MaxOfficialRating;
			hasThemeSong?: /* Optional filter by items with theme songs. */ Parameters.HasThemeSong;
			hasThemeVideo?: /* Optional filter by items with theme videos. */ Parameters.HasThemeVideo;
			hasSubtitles?: /* Optional filter by items with subtitles. */ Parameters.HasSubtitles;
			hasSpecialFeature?: /* Optional filter by items with special features. */ Parameters.HasSpecialFeature;
			hasTrailer?: /* Optional filter by items with trailers. */ Parameters.HasTrailer;
			adjacentTo?: /* Optional. Return items that are siblings of a supplied item. */ Parameters.AdjacentTo;
			parentIndexNumber?: /* Optional filter by parent index number. */ Parameters.ParentIndexNumber /* int32 */;
			hasParentalRating?: /* Optional filter by items that have or do not have a parental rating. */ Parameters.HasParentalRating;
			isHd?: /* Optional filter by items that are HD or not. */ Parameters.IsHd;
			is4K?: /* Optional filter by items that are 4K or not. */ Parameters.Is4K;
			locationTypes?: /* Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimeted. */ Parameters.LocationTypes;
			excludeLocationTypes?: /* Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimeted. */ Parameters.ExcludeLocationTypes;
			isMissing?: /* Optional filter by items that are missing episodes or not. */ Parameters.IsMissing;
			isUnaired?: /* Optional filter by items that are unaired episodes or not. */ Parameters.IsUnaired;
			minCommunityRating?: /* Optional filter by minimum community rating. */ Parameters.MinCommunityRating /* double */;
			minCriticRating?: /* Optional filter by minimum critic rating. */ Parameters.MinCriticRating /* double */;
			minPremiereDate?: /* Optional. The minimum premiere date. Format = ISO. */ Parameters.MinPremiereDate /* date-time */;
			minDateLastSaved?: /* Optional. The minimum last saved date. Format = ISO. */ Parameters.MinDateLastSaved /* date-time */;
			minDateLastSavedForUser?: /* Optional. The minimum last saved date for the current user. Format = ISO. */ Parameters.MinDateLastSavedForUser /* date-time */;
			maxPremiereDate?: /* Optional. The maximum premiere date. Format = ISO. */ Parameters.MaxPremiereDate /* date-time */;
			hasOverview?: /* Optional filter by items that have an overview or not. */ Parameters.HasOverview;
			hasImdbId?: /* Optional filter by items that have an imdb id or not. */ Parameters.HasImdbId;
			hasTmdbId?: /* Optional filter by items that have a tmdb id or not. */ Parameters.HasTmdbId;
			hasTvdbId?: /* Optional filter by items that have a tvdb id or not. */ Parameters.HasTvdbId;
			excludeItemIds?: /* Optional. If specified, results will be filtered by exxcluding item ids. This allows multiple, comma delimeted. */ Parameters.ExcludeItemIds;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			recursive?: /* When searching within folders, this determines whether or not the search will be recursive. true/false. */ Parameters.Recursive;
			searchTerm?: /* Optional. Filter based on a search term. */ Parameters.SearchTerm;
			sortOrder?: /* Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimeted. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimeted. */ Parameters.IncludeItemTypes;
			filters?: /* Optional. Specify additional filters to apply. This allows multiple, comma delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			mediaTypes?: /* Optional filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			imageTypes?: /* Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited. */ Parameters.ImageTypes;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimeted. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
			isPlayed?: /* Optional filter by items that are played, or not. */ Parameters.IsPlayed;
			genres?: /* Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimeted. */ Parameters.Genres;
			officialRatings?: /* Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimeted. */ Parameters.OfficialRatings;
			tags?: /* Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimeted. */ Parameters.Tags;
			years?: /* Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimeted. */ Parameters.Years;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			person?: /* Optional. If specified, results will be filtered to include only those containing the specified person. */ Parameters.Person;
			personIds?: /* Optional. If specified, results will be filtered to include only those containing the specified person id. */ Parameters.PersonIds;
			personTypes?: /* Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			studios?: /* Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimeted. */ Parameters.Studios;
			artists?: /* Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimeted. */ Parameters.Artists;
			excludeArtistIds?: /* Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimeted. */ Parameters.ExcludeArtistIds;
			artistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified artist id. */ Parameters.ArtistIds;
			albumArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified album artist id. */ Parameters.AlbumArtistIds;
			contributingArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified contributing artist id. */ Parameters.ContributingArtistIds;
			albums?: /* Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimeted. */ Parameters.Albums;
			albumIds?: /* Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimeted. */ Parameters.AlbumIds;
			ids?: /* Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited. */ Parameters.Ids;
			videoTypes?: /* Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimeted. */ Parameters.VideoTypes;
			minOfficialRating?: /* Optional filter by minimum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MinOfficialRating;
			isLocked?: /* Optional filter by items that are locked. */ Parameters.IsLocked;
			isPlaceHolder?: /* Optional filter by items that are placeholders. */ Parameters.IsPlaceHolder;
			hasOfficialRating?: /* Optional filter by items that have official ratings. */ Parameters.HasOfficialRating;
			collapseBoxSetItems?: /* Whether or not to hide items behind their boxsets. */ Parameters.CollapseBoxSetItems;
			minWidth?: /* Optional. Filter by the minimum width of the item. */ Parameters.MinWidth /* int32 */;
			minHeight?: /* Optional. Filter by the minimum height of the item. */ Parameters.MinHeight /* int32 */;
			maxWidth?: /* Optional. Filter by the maximum width of the item. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* Optional. Filter by the maximum height of the item. */ Parameters.MaxHeight /* int32 */;
			is3D?: /* Optional filter by items that are 3D, or not. */ Parameters.Is3D;
			seriesStatus?: /* Optional filter by Series Status. Allows multiple, comma delimeted. */ Parameters.SeriesStatus;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			studioIds?: /* Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimeted. */ Parameters.StudioIds;
			genreIds?: /* Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimeted. */ Parameters.GenreIds;
			enableTotalRecordCount?: /* Optional. Enable the total record count. */ Parameters.EnableTotalRecordCount;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetKeys {
		namespace Responses {
			export type $200 = Components.Schemas.AuthenticationInfoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLatestChannelItems {
		namespace Parameters {
			/**
			 * Optional. Specify one or more channel id's, comma delimited.
			 */
			export type ChannelIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. User Id. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			filters?: /* Optional. Specify additional filters to apply. */ Parameters.Filters;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			channelIds?: /* Optional. Specify one or more channel id's, comma delimited. */ Parameters.ChannelIds;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLatestMedia {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Whether or not to group items into a parent container.
			 */
			export type GroupItems = boolean;
			/**
			 * Optional. the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Filter by items that are played, or not.
			 */
			export type IsPlayed = boolean;
			/**
			 * Return item limit.
			 */
			export type Limit = number; // int32
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			isPlayed?: /* Filter by items that are played, or not. */ Parameters.IsPlayed;
			enableImages?: /* Optional. include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. include user data. */ Parameters.EnableUserData;
			limit?: /* Return item limit. */ Parameters.Limit /* int32 */;
			groupItems?: /* Whether or not to group items into a parent container. */ Parameters.GroupItems;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLibraryOptionsInfo {
		namespace Parameters {
			/**
			 * Whether this is a new library.
			 */
			export type IsNewLibrary = boolean;
			/**
			 * Library content type.
			 */
			export type LibraryContentType = string;
		}
		export interface QueryParameters {
			libraryContentType?: /* Library content type. */ Parameters.LibraryContentType;
			isNewLibrary?: /* Whether this is a new library. */ Parameters.IsNewLibrary;
		}
		namespace Responses {
			export type $200 = /* Library options result dto. */ Components.Schemas.LibraryOptionsResultDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLineups {
		namespace Parameters {
			/**
			 * Country.
			 */
			export type Country = string;
			/**
			 * Provider id.
			 */
			export type Id = string;
			/**
			 * Location.
			 */
			export type Location = string;
			/**
			 * Provider type.
			 */
			export type Type = string;
		}
		export interface QueryParameters {
			id?: /* Provider id. */ Parameters.Id;
			type?: /* Provider type. */ Parameters.Type;
			location?: /* Location. */ Parameters.Location;
			country?: /* Country. */ Parameters.Country;
		}
		namespace Responses {
			export type $200 = Components.Schemas.NameIdPair[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLiveHlsStream {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The audio container.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. Whether to enable subtitles in the manifest.
			 */
			export type EnableSubtitlesInManifest = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional. The max height.
			 */
			export type MaxHeight = number; // int32
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * Optional. The max width.
			 */
			export type MaxWidth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* The audio container. */ Parameters.Container;
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
			maxWidth?: /* Optional. The max width. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* Optional. The max height. */ Parameters.MaxHeight /* int32 */;
			enableSubtitlesInManifest?: /* Optional. Whether to enable subtitles in the manifest. */ Parameters.EnableSubtitlesInManifest;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLiveRecordingFile {
		namespace Parameters {
			/**
			 * Recording id.
			 */
			export type RecordingId = string;
		}
		export interface PathParameters {
			recordingId: /* Recording id. */ Parameters.RecordingId;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetLiveStreamFile {
		namespace Parameters {
			/**
			 * Container type.
			 */
			export type Container = string;
			/**
			 * Stream id.
			 */
			export type StreamId = string;
		}
		export interface PathParameters {
			streamId: /* Stream id. */ Parameters.StreamId;
			container: /* Container type. */ Parameters.Container;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetLiveTvChannels {
		namespace Parameters {
			/**
			 * Optional. Adds current program info to each channel.
			 */
			export type AddCurrentProgram = boolean;
			/**
			 * Optional. Incorporate favorite and like status into channel sorting.
			 */
			export type EnableFavoriteSorting = boolean;
			/**
			 * "Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by channels that are disliked, or not.
			 */
			export type IsDisliked = boolean;
			/**
			 * Optional. Filter by channels that are favorites, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. Filter for kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional. Filter by channels that are liked, or not.
			 */
			export type IsLiked = boolean;
			/**
			 * Optional. Filter for movies.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional. Filter for news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional. Filter for series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional. Filter for sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Key to sort by.
			 */
			export type SortBy = string[];
			/**
			 * Optional. Sort order.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Filter by channel type.
			 */
			export type Type = /* Enum ChannelType. */ Components.Schemas.ChannelType;
			/**
			 * Optional. Filter by user and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			type?: /* Optional. Filter by channel type. */ Parameters.Type;
			userId?: /* Optional. Filter by user and attach user data. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			isMovie?: /* Optional. Filter for movies. */ Parameters.IsMovie;
			isSeries?: /* Optional. Filter for series. */ Parameters.IsSeries;
			isNews?: /* Optional. Filter for news. */ Parameters.IsNews;
			isKids?: /* Optional. Filter for kids. */ Parameters.IsKids;
			isSports?: /* Optional. Filter for sports. */ Parameters.IsSports;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			isFavorite?: /* Optional. Filter by channels that are favorites, or not. */ Parameters.IsFavorite;
			isLiked?: /* Optional. Filter by channels that are liked, or not. */ Parameters.IsLiked;
			isDisliked?: /* Optional. Filter by channels that are disliked, or not. */ Parameters.IsDisliked;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* "Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			sortBy?: /* Optional. Key to sort by. */ Parameters.SortBy;
			sortOrder?: /* Optional. Sort order. */ Parameters.SortOrder;
			enableFavoriteSorting?: /* Optional. Incorporate favorite and like status into channel sorting. */ Parameters.EnableFavoriteSorting;
			addCurrentProgram?: /* Optional. Adds current program info to each channel. */ Parameters.AddCurrentProgram;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLiveTvInfo {
		namespace Responses {
			export type $200 = Components.Schemas.LiveTvInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLiveTvPrograms {
		namespace Parameters {
			/**
			 * The channels to return guide information for.
			 */
			export type ChannelIds = string /* uuid */[];
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Retrieve total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The genre ids to return guide information for.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * The genres to return guide information for.
			 */
			export type Genres = string[];
			/**
			 * Optional. Filter by programs that have completed airing, or not.
			 */
			export type HasAired = boolean;
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by programs that are currently airing, or not.
			 */
			export type IsAiring = boolean;
			/**
			 * Optional. Filter for kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional. Filter for movies.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional. Filter for news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional. Filter for series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional. Filter for sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. Filter by library series id.
			 */
			export type LibrarySeriesId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. The maximum premiere end date.
			 */
			export type MaxEndDate = string; // date-time
			/**
			 * Optional. The maximum premiere start date.
			 */
			export type MaxStartDate = string; // date-time
			/**
			 * Optional. The minimum premiere end date.
			 */
			export type MinEndDate = string; // date-time
			/**
			 * Optional. The minimum premiere start date.
			 */
			export type MinStartDate = string; // date-time
			/**
			 * Optional. Filter by series timer id.
			 */
			export type SeriesTimerId = string;
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Name, StartDate.
			 */
			export type SortBy = string[];
			/**
			 * Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Filter by user id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			channelIds?: /* The channels to return guide information for. */ Parameters.ChannelIds;
			userId?: /* Optional. Filter by user id. */ Parameters.UserId /* uuid */;
			minStartDate?: /* Optional. The minimum premiere start date. */ Parameters.MinStartDate /* date-time */;
			hasAired?: /* Optional. Filter by programs that have completed airing, or not. */ Parameters.HasAired;
			isAiring?: /* Optional. Filter by programs that are currently airing, or not. */ Parameters.IsAiring;
			maxStartDate?: /* Optional. The maximum premiere start date. */ Parameters.MaxStartDate /* date-time */;
			minEndDate?: /* Optional. The minimum premiere end date. */ Parameters.MinEndDate /* date-time */;
			maxEndDate?: /* Optional. The maximum premiere end date. */ Parameters.MaxEndDate /* date-time */;
			isMovie?: /* Optional. Filter for movies. */ Parameters.IsMovie;
			isSeries?: /* Optional. Filter for series. */ Parameters.IsSeries;
			isNews?: /* Optional. Filter for news. */ Parameters.IsNews;
			isKids?: /* Optional. Filter for kids. */ Parameters.IsKids;
			isSports?: /* Optional. Filter for sports. */ Parameters.IsSports;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Name, StartDate. */ Parameters.SortBy;
			sortOrder?: /* Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			genres?: /* The genres to return guide information for. */ Parameters.Genres;
			genreIds?: /* The genre ids to return guide information for. */ Parameters.GenreIds;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			seriesTimerId?: /* Optional. Filter by series timer id. */ Parameters.SeriesTimerId;
			librarySeriesId?: /* Optional. Filter by library series id. */ Parameters.LibrarySeriesId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableTotalRecordCount?: /* Retrieve total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLocalTrailers {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLocalizationOptions {
		namespace Responses {
			export type $200 = Components.Schemas.LocalizationOption[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLogEntries {
		namespace Parameters {
			/**
			 * Optional. Filter log entries if it has user id, or not.
			 */
			export type HasUserId = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. The minimum date. Format = ISO.
			 */
			export type MinDate = string; // date-time
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
		}
		export interface QueryParameters {
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			minDate?: /* Optional. The minimum date. Format = ISO. */ Parameters.MinDate /* date-time */;
			hasUserId?: /* Optional. Filter log entries if it has user id, or not. */ Parameters.HasUserId;
		}
		namespace Responses {
			export type $200 = Components.Schemas.ActivityLogEntryQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetLogFile {
		namespace Parameters {
			/**
			 * The name of the log file to get.
			 */
			export type Name = string;
		}
		export interface QueryParameters {
			name: /* The name of the log file to get. */ Parameters.Name;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMasterHlsAudioPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Enable adaptive bitrate streaming.
			 */
			export type EnableAdaptiveBitrateStreaming = boolean;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
			enableAdaptiveBitrateStreaming?: /* Enable adaptive bitrate streaming. */ Parameters.EnableAdaptiveBitrateStreaming;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMasterHlsVideoPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Enable adaptive bitrate streaming.
			 */
			export type EnableAdaptiveBitrateStreaming = boolean;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
			enableAdaptiveBitrateStreaming?: /* Enable adaptive bitrate streaming. */ Parameters.EnableAdaptiveBitrateStreaming;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMediaFolders {
		namespace Parameters {
			/**
			 * Optional. Filter by folders that are marked hidden, or not.
			 */
			export type IsHidden = boolean;
		}
		export interface QueryParameters {
			isHidden?: /* Optional. Filter by folders that are marked hidden, or not. */ Parameters.IsHidden;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMediaInfoImage {
		namespace Parameters {
			/**
			 * The name of the image.
			 */
			export type Name = string;
			/**
			 * The theme to get the image from.
			 */
			export type Theme = string;
		}
		export interface PathParameters {
			theme: /* The theme to get the image from. */ Parameters.Theme;
			name: /* The name of the image. */ Parameters.Name;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetMediaInfoImages {
		namespace Responses {
			export type $200 = Components.Schemas.ImageByNameInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMediaReceiverRegistrar {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetMediaReceiverRegistrar2 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetMediaReceiverRegistrar3 {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace GetMetadataEditorInfo {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.MetadataEditorInfo;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetMovieRecommendations {
		namespace Parameters {
			/**
			 * The max number of categories to return.
			 */
			export type CategoryLimit = number; // int32
			/**
			 * Optional. The fields to return.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The max number of items to return per category.
			 */
			export type ItemLimit = number; // int32
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. The fields to return. */ Parameters.Fields;
			categoryLimit?: /* The max number of categories to return. */ Parameters.CategoryLimit /* int32 */;
			itemLimit?: /* The max number of items to return per category. */ Parameters.ItemLimit /* int32 */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.RecommendationDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMovieRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.MovieInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMusicAlbumRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.AlbumInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMusicArtistRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.ArtistInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMusicGenre {
		namespace Parameters {
			/**
			 * The genre name.
			 */
			export type GenreName = string;
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			genreName: /* The genre name. */ Parameters.GenreName;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMusicGenreImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Music genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Music genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetMusicGenreImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Music genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Music genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetMusicGenres {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * The search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* The search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			enableTotalRecordCount?: /* Optional. Include total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetMusicVideoRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.MusicVideoInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNamedConfiguration {
		namespace Parameters {
			/**
			 * Configuration key.
			 */
			export type Key = string;
		}
		export interface PathParameters {
			key: /* Configuration key. */ Parameters.Key;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNetworkShares {
		namespace Responses {
			export type $200 = /* Class FileSystemEntryInfo. */ Components.Schemas.FileSystemEntryInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNextUp {
		namespace Parameters {
			/**
			 * Whether to disable sending the first episode in a series as next up.
			 */
			export type DisableFirstEpisode = boolean;
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImges = boolean;
			/**
			 * Whether to enable the total records count. Defaults to true.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. Filter by series id.
			 */
			export type SeriesId = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * The user id of the user to get the next up episodes for.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* The user id of the user to get the next up episodes for. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			seriesId?: /* Optional. Filter by series id. */ Parameters.SeriesId;
			parentId?: /* Optional. Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			enableImges?: /* Optional. Include image information in output. */ Parameters.EnableImges;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			enableTotalRecordCount?: /* Whether to enable the total records count. Defaults to true. */ Parameters.EnableTotalRecordCount;
			disableFirstEpisode?: /* Whether to disable sending the first episode in a series as next up. */ Parameters.DisableFirstEpisode;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNotificationServices {
		namespace Responses {
			export type $200 = Components.Schemas.NameIdPair[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNotificationTypes {
		namespace Responses {
			export type $200 = Components.Schemas.NotificationTypeInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNotifications {
		namespace Parameters {
			export type UserId = string;
		}
		export interface PathParameters {
			userId: Parameters.UserId;
		}
		namespace Responses {
			export type $200 = /* A list of notifications with the total record count for pagination. */ Components.Schemas.NotificationResultDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetNotificationsSummary {
		namespace Parameters {
			export type UserId = string;
		}
		export interface PathParameters {
			userId: Parameters.UserId;
		}
		namespace Responses {
			export type $200 = /* The notification summary DTO. */ Components.Schemas.NotificationsSummaryDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPackageInfo {
		namespace Parameters {
			/**
			 * The GUID of the associated assembly.
			 */
			export type AssemblyGuid = string; // uuid
			/**
			 * The name of the package.
			 */
			export type Name = string;
		}
		export interface PathParameters {
			name: /* The name of the package. */ Parameters.Name;
		}
		export interface QueryParameters {
			assemblyGuid?: /* The GUID of the associated assembly. */ Parameters.AssemblyGuid /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class PackageInfo. */ Components.Schemas.PackageInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPackages {
		namespace Responses {
			export type $200 = /* Class PackageInfo. */ Components.Schemas.PackageInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetParentPath {
		namespace Parameters {
			/**
			 * The path.
			 */
			export type Path = string;
		}
		export interface QueryParameters {
			path: /* The path. */ Parameters.Path;
		}
		namespace Responses {
			export type $200 = string;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetParentalRatings {
		namespace Responses {
			export type $200 = /* Class ParentalRating. */ Components.Schemas.ParentalRating[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPasswordResetProviders {
		namespace Responses {
			export type $200 = Components.Schemas.NameIdPair[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPerson {
		namespace Parameters {
			/**
			 * Person name.
			 */
			export type Name = string;
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			name: /* Person name. */ Parameters.Name;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPersonImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Person name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Person name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPersonImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Person name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Person name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPersonRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.PersonLookupInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPersons {
		namespace Parameters {
			/**
			 * Optional. If specified, person results will be filtered on items related to said persons.
			 */
			export type AppearsInItemId = string; // uuid
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
			 */
			export type ExcludePersonTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional filter by items that are marked as favorite, or not. userId is required.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * The search term.
			 */
			export type SearchTerm = string;
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* The search term. */ Parameters.SearchTerm;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			filters?: /* Optional. Specify additional filters to apply. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. userId is required. */ Parameters.IsFavorite;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			excludePersonTypes?: /* Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited. */ Parameters.ExcludePersonTypes;
			personTypes?: /* Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			appearsInItemId?: /* Optional. If specified, person results will be filtered on items related to said persons. */ Parameters.AppearsInItemId /* uuid */;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPhysicalPaths {
		namespace Responses {
			export type $200 = string[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPingSystem {
		namespace Responses {
			export type $200 = string;
		}
	}
	namespace GetPlaybackInfo {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class PlaybackInfoResponse. */ Components.Schemas.PlaybackInfoResponse;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPlaylistItems {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string; // uuid
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			playlistId: /* The playlist id. */ Parameters.PlaylistId /* uuid */;
		}
		export interface QueryParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
			export interface $404 {}
		}
	}
	namespace GetPluginConfiguration {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class BasePluginConfiguration. */ Components.Schemas.BasePluginConfiguration;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPluginImage {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
			/**
			 * Plugin version.
			 */
			export type Version = Components.Schemas.Version;
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
			version: /* Plugin version. */ Parameters.Version;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPluginManifest {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetPlugins {
		namespace Responses {
			export type $200 = /* This is a serializable stub class that is used by the api to provide information about installed plugins. */ Components.Schemas.PluginInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPostedPlaybackInfo {
		namespace Parameters {
			/**
			 * Whether to allow to copy the audio stream. Default: true.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether to allow to copy the video stream. Default: true.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * The audio stream index.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Whether to auto open the livestream.
			 */
			export type AutoOpenLiveStream = boolean;
			/**
			 * Whether to enable direct play. Default: true.
			 */
			export type EnableDirectPlay = boolean;
			/**
			 * Whether to enable direct stream. Default: true.
			 */
			export type EnableDirectStream = boolean;
			/**
			 * Whether to enable transcoding. Default: true.
			 */
			export type EnableTranscoding = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The livestream id.
			 */
			export type LiveStreamId = string;
			/**
			 * The maximum number of audio channels.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * The media source id.
			 */
			export type MediaSourceId = string;
			/**
			 * The start time in ticks.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * The subtitle stream index.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			maxStreamingBitrate?: /* The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			startTimeTicks?: /* The start time in ticks. */ Parameters.StartTimeTicks /* int64 */;
			audioStreamIndex?: /* The audio stream index. */ Parameters.AudioStreamIndex /* int32 */;
			subtitleStreamIndex?: /* The subtitle stream index. */ Parameters.SubtitleStreamIndex /* int32 */;
			maxAudioChannels?: /* The maximum number of audio channels. */ Parameters.MaxAudioChannels /* int32 */;
			mediaSourceId?: /* The media source id. */ Parameters.MediaSourceId;
			liveStreamId?: /* The livestream id. */ Parameters.LiveStreamId;
			autoOpenLiveStream?: /* Whether to auto open the livestream. */ Parameters.AutoOpenLiveStream;
			enableDirectPlay?: /* Whether to enable direct play. Default: true. */ Parameters.EnableDirectPlay;
			enableDirectStream?: /* Whether to enable direct stream. Default: true. */ Parameters.EnableDirectStream;
			enableTranscoding?: /* Whether to enable transcoding. Default: true. */ Parameters.EnableTranscoding;
			allowVideoStreamCopy?: /* Whether to allow to copy the video stream. Default: true. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether to allow to copy the audio stream. Default: true. */ Parameters.AllowAudioStreamCopy;
		}
		/**
		 * The playback info.
		 */
		export type RequestBody = /* Plabyback info dto. */ Components.Schemas.PlaybackInfoDto;
		namespace Responses {
			export type $200 = /* Class PlaybackInfoResponse. */ Components.Schemas.PlaybackInfoResponse;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetProfile {
		namespace Parameters {
			/**
			 * Profile Id.
			 */
			export type ProfileId = string;
		}
		export interface PathParameters {
			profileId: /* Profile Id. */ Parameters.ProfileId;
		}
		namespace Responses {
			export type $200 = /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ Components.Schemas.DeviceProfile;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetProfileInfos {
		namespace Responses {
			export type $200 = Components.Schemas.DeviceProfileInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetProgram {
		namespace Parameters {
			/**
			 * Program id.
			 */
			export type ProgramId = string;
			/**
			 * Optional. Attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			programId: /* Program id. */ Parameters.ProgramId;
		}
		export interface QueryParameters {
			userId?: /* Optional. Attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPrograms {
		/**
		 * Request body.
		 */
		export type RequestBody = /* Get programs dto. */ Components.Schemas.GetProgramsDto;
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetPublicSystemInfo {
		namespace Responses {
			export type $200 = Components.Schemas.PublicSystemInfo;
		}
	}
	namespace GetPublicUsers {
		namespace Responses {
			export type $200 = /* Class UserDto. */ Components.Schemas.UserDto[];
		}
	}
	namespace GetQueryFilters {
		namespace Parameters {
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional. Is item airing.
			 */
			export type IsAiring = boolean;
			/**
			 * Optional. Is item kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional. Is item movie.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional. Is item news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional. Is item series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional. Is item sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. Search recursive.
			 */
			export type Recursive = boolean;
			/**
			 * Optional. User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. User id. */ Parameters.UserId /* uuid */;
			parentId?: /* Optional. Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			isAiring?: /* Optional. Is item airing. */ Parameters.IsAiring;
			isMovie?: /* Optional. Is item movie. */ Parameters.IsMovie;
			isSports?: /* Optional. Is item sports. */ Parameters.IsSports;
			isKids?: /* Optional. Is item kids. */ Parameters.IsKids;
			isNews?: /* Optional. Is item news. */ Parameters.IsNews;
			isSeries?: /* Optional. Is item series. */ Parameters.IsSeries;
			recursive?: /* Optional. Search recursive. */ Parameters.Recursive;
		}
		namespace Responses {
			export type $200 = Components.Schemas.QueryFilters;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetQueryFiltersLegacy {
		namespace Parameters {
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional. Filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional. Parent id.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. User id. */ Parameters.UserId /* uuid */;
			parentId?: /* Optional. Parent id. */ Parameters.ParentId /* uuid */;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			mediaTypes?: /* Optional. Filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
		}
		namespace Responses {
			export type $200 = Components.Schemas.QueryFiltersLegacy;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRatingImage {
		namespace Parameters {
			/**
			 * The name of the image.
			 */
			export type Name = string;
			/**
			 * The theme to get the image from.
			 */
			export type Theme = string;
		}
		export interface PathParameters {
			theme: /* The theme to get the image from. */ Parameters.Theme;
			name: /* The name of the image. */ Parameters.Name;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetRatingImages {
		namespace Responses {
			export type $200 = Components.Schemas.ImageByNameInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecommendedPrograms {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Retrieve total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The genres to return guide information for.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. Filter by programs that have completed airing, or not.
			 */
			export type HasAired = boolean;
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by programs that are currently airing, or not.
			 */
			export type IsAiring = boolean;
			/**
			 * Optional. Filter for kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional. Filter for movies.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional. Filter for news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional. Filter for series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional. Filter for sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. filter by user id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. filter by user id. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			isAiring?: /* Optional. Filter by programs that are currently airing, or not. */ Parameters.IsAiring;
			hasAired?: /* Optional. Filter by programs that have completed airing, or not. */ Parameters.HasAired;
			isSeries?: /* Optional. Filter for series. */ Parameters.IsSeries;
			isMovie?: /* Optional. Filter for movies. */ Parameters.IsMovie;
			isNews?: /* Optional. Filter for news. */ Parameters.IsNews;
			isKids?: /* Optional. Filter for kids. */ Parameters.IsKids;
			isSports?: /* Optional. Filter for sports. */ Parameters.IsSports;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			genreIds?: /* The genres to return guide information for. */ Parameters.GenreIds;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableUserData?: /* Optional. include user data. */ Parameters.EnableUserData;
			enableTotalRecordCount?: /* Retrieve total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecording {
		namespace Parameters {
			/**
			 * Recording id.
			 */
			export type RecordingId = string; // uuid
			/**
			 * Optional. Attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			recordingId: /* Recording id. */ Parameters.RecordingId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecordingFolders {
		namespace Parameters {
			/**
			 * Optional. Filter by user and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecordingGroup {
		namespace Parameters {
			/**
			 * Group id.
			 */
			export type GroupId = string; // uuid
		}
		export interface PathParameters {
			groupId: /* Group id. */ Parameters.GroupId /* uuid */;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetRecordingGroups {
		namespace Parameters {
			/**
			 * Optional. Filter by user and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecordings {
		namespace Parameters {
			/**
			 * Optional. Filter by channel id.
			 */
			export type ChannelId = string;
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Return total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by recordings that are in progress, or not.
			 */
			export type IsInProgress = boolean;
			/**
			 * Optional. Filter for kids.
			 */
			export type IsKids = boolean;
			/**
			 * Optional. Filter for is library item.
			 */
			export type IsLibraryItem = boolean;
			/**
			 * Optional. Filter for movies.
			 */
			export type IsMovie = boolean;
			/**
			 * Optional. Filter for news.
			 */
			export type IsNews = boolean;
			/**
			 * Optional. Filter for series.
			 */
			export type IsSeries = boolean;
			/**
			 * Optional. Filter for sports.
			 */
			export type IsSports = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by recordings belonging to a series timer.
			 */
			export type SeriesTimerId = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Filter by recording status.
			 */
			export type Status = Components.Schemas.RecordingStatus;
			/**
			 * Optional. Filter by user and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			channelId?: /* Optional. Filter by channel id. */ Parameters.ChannelId;
			userId?: /* Optional. Filter by user and attach user data. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			status?: /* Optional. Filter by recording status. */ Parameters.Status;
			isInProgress?: /* Optional. Filter by recordings that are in progress, or not. */ Parameters.IsInProgress;
			seriesTimerId?: /* Optional. Filter by recordings belonging to a series timer. */ Parameters.SeriesTimerId;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			isMovie?: /* Optional. Filter for movies. */ Parameters.IsMovie;
			isSeries?: /* Optional. Filter for series. */ Parameters.IsSeries;
			isKids?: /* Optional. Filter for kids. */ Parameters.IsKids;
			isSports?: /* Optional. Filter for sports. */ Parameters.IsSports;
			isNews?: /* Optional. Filter for news. */ Parameters.IsNews;
			isLibraryItem?: /* Optional. Filter for is library item. */ Parameters.IsLibraryItem;
			enableTotalRecordCount?: /* Optional. Return total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRecordingsSeries {
		namespace Parameters {
			/**
			 * Optional. Filter by channel id.
			 */
			export type ChannelId = string;
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Return total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Filter by recording group.
			 */
			export type GroupId = string;
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by recordings that are in progress, or not.
			 */
			export type IsInProgress = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by recordings belonging to a series timer.
			 */
			export type SeriesTimerId = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. Filter by recording status.
			 */
			export type Status = Components.Schemas.RecordingStatus;
			/**
			 * Optional. Filter by user and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			channelId?: /* Optional. Filter by channel id. */ Parameters.ChannelId;
			userId?: /* Optional. Filter by user and attach user data. */ Parameters.UserId /* uuid */;
			groupId?: /* Optional. Filter by recording group. */ Parameters.GroupId;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			status?: /* Optional. Filter by recording status. */ Parameters.Status;
			isInProgress?: /* Optional. Filter by recordings that are in progress, or not. */ Parameters.IsInProgress;
			seriesTimerId?: /* Optional. Filter by recordings belonging to a series timer. */ Parameters.SeriesTimerId;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			enableTotalRecordCount?: /* Optional. Return total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRemoteImage {
		namespace Parameters {
			/**
			 * The image url.
			 */
			export type ImageUrl = string; // uri
		}
		export interface QueryParameters {
			imageUrl: /* The image url. */ Parameters.ImageUrl /* uri */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetRemoteImageProviders {
		namespace Parameters {
			/**
			 * Item Id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item Id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class ImageProviderInfo. */ Components.Schemas.ImageProviderInfo[];
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetRemoteImages {
		namespace Parameters {
			/**
			 * Optional. Include all languages.
			 */
			export type IncludeAllLanguages = boolean;
			/**
			 * Item Id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. The image provider to use.
			 */
			export type ProviderName = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * The image type.
			 */
			export type Type = /* Enum ImageType. */ Components.Schemas.ImageType;
		}
		export interface PathParameters {
			itemId: /* Item Id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			type?: /* The image type. */ Parameters.Type;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			providerName?: /* Optional. The image provider to use. */ Parameters.ProviderName;
			includeAllLanguages?: /* Optional. Include all languages. */ Parameters.IncludeAllLanguages;
		}
		namespace Responses {
			export type $200 = /* Class RemoteImageResult. */ Components.Schemas.RemoteImageResult;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetRemoteSearchImage {
		namespace Parameters {
			/**
			 * The image url.
			 */
			export type ImageUrl = string;
			/**
			 * The provider name.
			 */
			export type ProviderName = string;
		}
		export interface QueryParameters {
			imageUrl: /* The image url. */ Parameters.ImageUrl;
			providerName: /* The provider name. */ Parameters.ProviderName;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRemoteSubtitles {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type Id = string;
		}
		export interface PathParameters {
			id: /* The item id. */ Parameters.Id;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRepositories {
		namespace Responses {
			export type $200 = /* Class RepositoryInfo. */ Components.Schemas.RepositoryInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetResumeItems {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Enable the total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * The item limit.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * The search term.
			 */
			export type SearchTerm = string;
			/**
			 * The start index.
			 */
			export type StartIndex = number; // int32
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			startIndex?: /* The start index. */ Parameters.StartIndex /* int32 */;
			limit?: /* The item limit. */ Parameters.Limit /* int32 */;
			searchTerm?: /* The search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines. */ Parameters.Fields;
			mediaTypes?: /* Optional. Filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			excludeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on the item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			enableTotalRecordCount?: /* Optional. Enable the total record count. */ Parameters.EnableTotalRecordCount;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetRootFolder {
		namespace Parameters {
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSchedulesDirectCountries {
		namespace Responses {
			export type $200 = string; // binary
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSeasons {
		namespace Parameters {
			/**
			 * Optional. Return items that are siblings of a supplied item.
			 */
			export type AdjacentTo = string;
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. Filter by items that are missing episodes or not.
			 */
			export type IsMissing = boolean;
			/**
			 * Optional. Filter by special season.
			 */
			export type IsSpecialSeason = boolean;
			/**
			 * The series id.
			 */
			export type SeriesId = string; // uuid
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			seriesId: /* The series id. */ Parameters.SeriesId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
			isSpecialSeason?: /* Optional. Filter by special season. */ Parameters.IsSpecialSeason;
			isMissing?: /* Optional. Filter by items that are missing episodes or not. */ Parameters.IsMissing;
			adjacentTo?: /* Optional. Return items that are siblings of a supplied item. */ Parameters.AdjacentTo;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetSeriesRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.SeriesInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSeriesTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		namespace Responses {
			export type $200 = /* Class SeriesTimerInfoDto. */ Components.Schemas.SeriesTimerInfoDto;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetSeriesTimers {
		namespace Parameters {
			/**
			 * Optional. Sort by SortName or Priority.
			 */
			export type SortBy = string;
			/**
			 * Optional. Sort in Ascending or Descending order.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder;
		}
		export interface QueryParameters {
			sortBy?: /* Optional. Sort by SortName or Priority. */ Parameters.SortBy;
			sortOrder?: /* Optional. Sort in Ascending or Descending order. */ Parameters.SortOrder;
		}
		namespace Responses {
			export type $200 = Components.Schemas.SeriesTimerInfoDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetServerLogs {
		namespace Responses {
			export type $200 = Components.Schemas.LogFile[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSessions {
		namespace Parameters {
			/**
			 * Optional. Filter by sessions that were active in the last n seconds.
			 */
			export type ActiveWithinSeconds = number; // int32
			/**
			 * Filter by sessions that a given user is allowed to remote control.
			 */
			export type ControllableByUserId = string; // uuid
			/**
			 * Filter by device Id.
			 */
			export type DeviceId = string;
		}
		export interface QueryParameters {
			controllableByUserId?: /* Filter by sessions that a given user is allowed to remote control. */ Parameters.ControllableByUserId /* uuid */;
			deviceId?: /* Filter by device Id. */ Parameters.DeviceId;
			activeWithinSeconds?: /* Optional. Filter by sessions that were active in the last n seconds. */ Parameters.ActiveWithinSeconds /* int32 */;
		}
		namespace Responses {
			export type $200 = /* Class SessionInfo. */ Components.Schemas.SessionInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarAlbums {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarArtists {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarItems {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarMovies {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarShows {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSimilarTrailers {
		namespace Parameters {
			/**
			 * Exclude artist ids.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			excludeArtistIds?: /* Exclude artist ids. */ Parameters.ExcludeArtistIds;
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines, TrailerUrls. */ Parameters.Fields;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSpecialFeatures {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetStartupConfiguration {
		namespace Responses {
			export type $200 = /* The startup configuration DTO. */ Components.Schemas.StartupConfigurationDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetStatus {
		namespace Responses {
			export type $200 = /* Quick connect state. */ Components.Schemas.QuickConnectState;
		}
	}
	namespace GetStudio {
		namespace Parameters {
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetStudioImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetStudioImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetStudios {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. Search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			searchTerm?: /* Optional. Search term. */ Parameters.SearchTerm;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			userId?: /* User id. */ Parameters.UserId /* uuid */;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
			enableTotalRecordCount?: /* Total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSubtitle {
		namespace Parameters {
			/**
			 * Optional. Whether to add a VTT time map.
			 */
			export type AddVttTimeMap = boolean;
			/**
			 * Optional. Whether to copy the timestamps.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The end position of the subtitle in ticks.
			 */
			export type EndPositionTicks = number; // int64
			/**
			 * The format of the returned subtitle.
			 */
			export type Format = string;
			/**
			 * The subtitle stream index.
			 */
			export type Index = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The media source id.
			 */
			export type MediaSourceId = string;
			/**
			 * Optional. The start position of the subtitle in ticks.
			 */
			export type StartPositionTicks = number; // int64
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			mediaSourceId: /* The media source id. */ Parameters.MediaSourceId;
			index: /* The subtitle stream index. */ Parameters.Index /* int32 */;
			format: /* The format of the returned subtitle. */ Parameters.Format;
		}
		export interface QueryParameters {
			endPositionTicks?: /* Optional. The end position of the subtitle in ticks. */ Parameters.EndPositionTicks /* int64 */;
			copyTimestamps?: /* Optional. Whether to copy the timestamps. */ Parameters.CopyTimestamps;
			addVttTimeMap?: /* Optional. Whether to add a VTT time map. */ Parameters.AddVttTimeMap;
			startPositionTicks?: /* Optional. The start position of the subtitle in ticks. */ Parameters.StartPositionTicks /* int64 */;
		}
		namespace Responses {
			export type $200 = string; // binary
		}
	}
	namespace GetSubtitlePlaylist {
		namespace Parameters {
			/**
			 * The subtitle stream index.
			 */
			export type Index = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The media source id.
			 */
			export type MediaSourceId = string;
			/**
			 * The subtitle segment length.
			 */
			export type SegmentLength = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			index: /* The subtitle stream index. */ Parameters.Index /* int32 */;
			mediaSourceId: /* The media source id. */ Parameters.MediaSourceId;
		}
		export interface QueryParameters {
			segmentLength: /* The subtitle segment length. */ Parameters.SegmentLength /* int32 */;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSubtitleWithTicks {
		namespace Parameters {
			/**
			 * Optional. Whether to add a VTT time map.
			 */
			export type AddVttTimeMap = boolean;
			/**
			 * Optional. Whether to copy the timestamps.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The end position of the subtitle in ticks.
			 */
			export type EndPositionTicks = number; // int64
			/**
			 * The format of the returned subtitle.
			 */
			export type Format = string;
			/**
			 * The subtitle stream index.
			 */
			export type Index = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The media source id.
			 */
			export type MediaSourceId = string;
			/**
			 * Optional. The start position of the subtitle in ticks.
			 */
			export type StartPositionTicks = number; // int64
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			mediaSourceId: /* The media source id. */ Parameters.MediaSourceId;
			index: /* The subtitle stream index. */ Parameters.Index /* int32 */;
			startPositionTicks: /* Optional. The start position of the subtitle in ticks. */ Parameters.StartPositionTicks /* int64 */;
			format: /* The format of the returned subtitle. */ Parameters.Format;
		}
		export interface QueryParameters {
			endPositionTicks?: /* Optional. The end position of the subtitle in ticks. */ Parameters.EndPositionTicks /* int64 */;
			copyTimestamps?: /* Optional. Whether to copy the timestamps. */ Parameters.CopyTimestamps;
			addVttTimeMap?: /* Optional. Whether to add a VTT time map. */ Parameters.AddVttTimeMap;
		}
		namespace Responses {
			export type $200 = string; // binary
		}
	}
	namespace GetSuggestions {
		namespace Parameters {
			/**
			 * Whether to enable the total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional. The limit.
			 */
			export type Limit = number; // int32
			/**
			 * The media types.
			 */
			export type MediaType = string[];
			/**
			 * Optional. The start index.
			 */
			export type StartIndex = number; // int32
			/**
			 * The type.
			 */
			export type Type = string[];
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			mediaType?: /* The media types. */ Parameters.MediaType;
			type?: /* The type. */ Parameters.Type;
			startIndex?: /* Optional. The start index. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The limit. */ Parameters.Limit /* int32 */;
			enableTotalRecordCount?: /* Whether to enable the total record count. */ Parameters.EnableTotalRecordCount;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetSystemInfo {
		namespace Responses {
			export type $200 = /* Class SystemInfo. */ Components.Schemas.SystemInfo;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetTask {
		namespace Parameters {
			/**
			 * Task Id.
			 */
			export type TaskId = string;
		}
		export interface PathParameters {
			taskId: /* Task Id. */ Parameters.TaskId;
		}
		namespace Responses {
			export type $200 = /* Class TaskInfo. */ Components.Schemas.TaskInfo;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetTasks {
		namespace Parameters {
			/**
			 * Optional filter tasks that are enabled, or not.
			 */
			export type IsEnabled = boolean;
			/**
			 * Optional filter tasks that are hidden, or not.
			 */
			export type IsHidden = boolean;
		}
		export interface QueryParameters {
			isHidden?: /* Optional filter tasks that are hidden, or not. */ Parameters.IsHidden;
			isEnabled?: /* Optional filter tasks that are enabled, or not. */ Parameters.IsEnabled;
		}
		namespace Responses {
			export type $200 = /* Class TaskInfo. */ Components.Schemas.TaskInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetThemeMedia {
		namespace Parameters {
			/**
			 * Optional. Determines whether or not parent items should be searched for theme media.
			 */
			export type InheritFromParent = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			inheritFromParent?: /* Optional. Determines whether or not parent items should be searched for theme media. */ Parameters.InheritFromParent;
		}
		namespace Responses {
			export type $200 = Components.Schemas.AllThemeMediaResult;
			export interface $401 {}
			export interface $403 {}
			export interface $404 {}
		}
	}
	namespace GetThemeSongs {
		namespace Parameters {
			/**
			 * Optional. Determines whether or not parent items should be searched for theme media.
			 */
			export type InheritFromParent = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			inheritFromParent?: /* Optional. Determines whether or not parent items should be searched for theme media. */ Parameters.InheritFromParent;
		}
		namespace Responses {
			export type $200 = /* Class ThemeMediaResult. */ Components.Schemas.ThemeMediaResult;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetThemeVideos {
		namespace Parameters {
			/**
			 * Optional. Determines whether or not parent items should be searched for theme media.
			 */
			export type InheritFromParent = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
			inheritFromParent?: /* Optional. Determines whether or not parent items should be searched for theme media. */ Parameters.InheritFromParent;
		}
		namespace Responses {
			export type $200 = /* Class ThemeMediaResult. */ Components.Schemas.ThemeMediaResult;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		namespace Responses {
			export type $200 = Components.Schemas.TimerInfoDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetTimers {
		namespace Parameters {
			/**
			 * Optional. Filter by channel id.
			 */
			export type ChannelId = string;
			/**
			 * Optional. Filter by timers that are active.
			 */
			export type IsActive = boolean;
			/**
			 * Optional. Filter by timers that are scheduled.
			 */
			export type IsScheduled = boolean;
			/**
			 * Optional. Filter by timers belonging to a series timer.
			 */
			export type SeriesTimerId = string;
		}
		export interface QueryParameters {
			channelId?: /* Optional. Filter by channel id. */ Parameters.ChannelId;
			seriesTimerId?: /* Optional. Filter by timers belonging to a series timer. */ Parameters.SeriesTimerId;
			isActive?: /* Optional. Filter by timers that are active. */ Parameters.IsActive;
			isScheduled?: /* Optional. Filter by timers that are scheduled. */ Parameters.IsScheduled;
		}
		namespace Responses {
			export type $200 = Components.Schemas.TimerInfoDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetTrailerRemoteSearchResults {
		/**
		 * Remote search query.
		 */
		export type RequestBody = Components.Schemas.TrailerInfoRemoteSearchQuery;
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSearchResult[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetTrailers {
		namespace Parameters {
			/**
			 * Optional. Return items that are siblings of a supplied item.
			 */
			export type AdjacentTo = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified album artist id.
			 */
			export type AlbumArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited.
			 */
			export type AlbumIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited.
			 */
			export type Albums = string[];
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified artist id.
			 */
			export type ArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited.
			 */
			export type Artists = string[];
			/**
			 * Whether or not to hide items behind their boxsets.
			 */
			export type CollapseBoxSetItems = boolean;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified contributing artist id.
			 */
			export type ContributingArtistIds = string /* uuid */[];
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional, include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Enable the total record count.
			 */
			export type EnableTotalRecordCount = boolean;
			/**
			 * Optional, include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited.
			 */
			export type ExcludeArtistIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited.
			 */
			export type ExcludeItemIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited.
			 */
			export type ExcludeLocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
			 */
			export type Filters = /* Enum ItemFilter. */ Components.Schemas.ItemFilter[];
			/**
			 * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
			 */
			export type GenreIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
			 */
			export type Genres = string[];
			/**
			 * Optional filter by items that have an imdb id or not.
			 */
			export type HasImdbId = boolean;
			/**
			 * Optional filter by items that have official ratings.
			 */
			export type HasOfficialRating = boolean;
			/**
			 * Optional filter by items that have an overview or not.
			 */
			export type HasOverview = boolean;
			/**
			 * Optional filter by items that have or do not have a parental rating.
			 */
			export type HasParentalRating = boolean;
			/**
			 * Optional filter by items with special features.
			 */
			export type HasSpecialFeature = boolean;
			/**
			 * Optional filter by items with subtitles.
			 */
			export type HasSubtitles = boolean;
			/**
			 * Optional filter by items with theme songs.
			 */
			export type HasThemeSong = boolean;
			/**
			 * Optional filter by items with theme videos.
			 */
			export type HasThemeVideo = boolean;
			/**
			 * Optional filter by items that have a tmdb id or not.
			 */
			export type HasTmdbId = boolean;
			/**
			 * Optional filter by items with trailers.
			 */
			export type HasTrailer = boolean;
			/**
			 * Optional filter by items that have a tvdb id or not.
			 */
			export type HasTvdbId = boolean;
			/**
			 * Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited.
			 */
			export type Ids = string /* uuid */[];
			/**
			 * Optional, the max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited.
			 */
			export type ImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional filter by items that are 3D, or not.
			 */
			export type Is3D = boolean;
			/**
			 * Optional filter by items that are 4K or not.
			 */
			export type Is4K = boolean;
			/**
			 * Optional filter by items that are marked as favorite, or not.
			 */
			export type IsFavorite = boolean;
			/**
			 * Optional filter by items that are HD or not.
			 */
			export type IsHd = boolean;
			/**
			 * Optional filter by items that are locked.
			 */
			export type IsLocked = boolean;
			/**
			 * Optional filter by items that are missing episodes or not.
			 */
			export type IsMissing = boolean;
			/**
			 * Optional filter by items that are placeholders.
			 */
			export type IsPlaceHolder = boolean;
			/**
			 * Optional filter by items that are played, or not.
			 */
			export type IsPlayed = boolean;
			/**
			 * Optional filter by items that are unaired episodes or not.
			 */
			export type IsUnaired = boolean;
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited.
			 */
			export type LocationTypes = /* Enum LocationType. */ Components.Schemas.LocationType[];
			/**
			 * Optional. Filter by the maximum height of the item.
			 */
			export type MaxHeight = number; // int32
			/**
			 * Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MaxOfficialRating = string;
			/**
			 * Optional. The maximum premiere date. Format = ISO.
			 */
			export type MaxPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the maximum width of the item.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Optional filter by minimum community rating.
			 */
			export type MinCommunityRating = number; // double
			/**
			 * Optional filter by minimum critic rating.
			 */
			export type MinCriticRating = number; // double
			/**
			 * Optional. The minimum last saved date. Format = ISO.
			 */
			export type MinDateLastSaved = string; // date-time
			/**
			 * Optional. The minimum last saved date for the current user. Format = ISO.
			 */
			export type MinDateLastSavedForUser = string; // date-time
			/**
			 * Optional. Filter by the minimum height of the item.
			 */
			export type MinHeight = number; // int32
			/**
			 * Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
			 */
			export type MinOfficialRating = string;
			/**
			 * Optional. The minimum premiere date. Format = ISO.
			 */
			export type MinPremiereDate = string; // date-time
			/**
			 * Optional. Filter by the minimum width of the item.
			 */
			export type MinWidth = number; // int32
			/**
			 * Optional filter by items whose name is equally or lesser than a given input string.
			 */
			export type NameLessThan = string;
			/**
			 * Optional filter by items whose name is sorted equally than a given input string.
			 */
			export type NameStartsWith = string;
			/**
			 * Optional filter by items whose name is sorted equally or greater than a given input string.
			 */
			export type NameStartsWithOrGreater = string;
			/**
			 * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
			 */
			export type OfficialRatings = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional filter by parent index number.
			 */
			export type ParentIndexNumber = number; // int32
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person.
			 */
			export type Person = string;
			/**
			 * Optional. If specified, results will be filtered to include only those containing the specified person id.
			 */
			export type PersonIds = string /* uuid */[];
			/**
			 * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
			 */
			export type PersonTypes = string[];
			/**
			 * When searching within folders, this determines whether or not the search will be recursive. true/false.
			 */
			export type Recursive = boolean;
			/**
			 * Optional. Filter based on a search term.
			 */
			export type SearchTerm = string;
			/**
			 * Optional filter by Series Status. Allows multiple, comma delimited.
			 */
			export type SeriesStatus = /* Enum SeriesStatus. */ Components.Schemas.SeriesStatus[];
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string[];
			/**
			 * Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
			 */
			export type StudioIds = string /* uuid */[];
			/**
			 * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
			 */
			export type Studios = string[];
			/**
			 * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
			 */
			export type Tags = string[];
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
			/**
			 * Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited.
			 */
			export type VideoTypes = /* Enum VideoType. */ Components.Schemas.VideoType[];
			/**
			 * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
			 */
			export type Years = number /* int32 */[];
		}
		export interface QueryParameters {
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			maxOfficialRating?: /* Optional filter by maximum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MaxOfficialRating;
			hasThemeSong?: /* Optional filter by items with theme songs. */ Parameters.HasThemeSong;
			hasThemeVideo?: /* Optional filter by items with theme videos. */ Parameters.HasThemeVideo;
			hasSubtitles?: /* Optional filter by items with subtitles. */ Parameters.HasSubtitles;
			hasSpecialFeature?: /* Optional filter by items with special features. */ Parameters.HasSpecialFeature;
			hasTrailer?: /* Optional filter by items with trailers. */ Parameters.HasTrailer;
			adjacentTo?: /* Optional. Return items that are siblings of a supplied item. */ Parameters.AdjacentTo;
			parentIndexNumber?: /* Optional filter by parent index number. */ Parameters.ParentIndexNumber /* int32 */;
			hasParentalRating?: /* Optional filter by items that have or do not have a parental rating. */ Parameters.HasParentalRating;
			isHd?: /* Optional filter by items that are HD or not. */ Parameters.IsHd;
			is4K?: /* Optional filter by items that are 4K or not. */ Parameters.Is4K;
			locationTypes?: /* Optional. If specified, results will be filtered based on LocationType. This allows multiple, comma delimited. */ Parameters.LocationTypes;
			excludeLocationTypes?: /* Optional. If specified, results will be filtered based on the LocationType. This allows multiple, comma delimited. */ Parameters.ExcludeLocationTypes;
			isMissing?: /* Optional filter by items that are missing episodes or not. */ Parameters.IsMissing;
			isUnaired?: /* Optional filter by items that are unaired episodes or not. */ Parameters.IsUnaired;
			minCommunityRating?: /* Optional filter by minimum community rating. */ Parameters.MinCommunityRating /* double */;
			minCriticRating?: /* Optional filter by minimum critic rating. */ Parameters.MinCriticRating /* double */;
			minPremiereDate?: /* Optional. The minimum premiere date. Format = ISO. */ Parameters.MinPremiereDate /* date-time */;
			minDateLastSaved?: /* Optional. The minimum last saved date. Format = ISO. */ Parameters.MinDateLastSaved /* date-time */;
			minDateLastSavedForUser?: /* Optional. The minimum last saved date for the current user. Format = ISO. */ Parameters.MinDateLastSavedForUser /* date-time */;
			maxPremiereDate?: /* Optional. The maximum premiere date. Format = ISO. */ Parameters.MaxPremiereDate /* date-time */;
			hasOverview?: /* Optional filter by items that have an overview or not. */ Parameters.HasOverview;
			hasImdbId?: /* Optional filter by items that have an imdb id or not. */ Parameters.HasImdbId;
			hasTmdbId?: /* Optional filter by items that have a tmdb id or not. */ Parameters.HasTmdbId;
			hasTvdbId?: /* Optional filter by items that have a tvdb id or not. */ Parameters.HasTvdbId;
			excludeItemIds?: /* Optional. If specified, results will be filtered by excluding item ids. This allows multiple, comma delimited. */ Parameters.ExcludeItemIds;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			recursive?: /* When searching within folders, this determines whether or not the search will be recursive. true/false. */ Parameters.Recursive;
			searchTerm?: /* Optional. Filter based on a search term. */ Parameters.SearchTerm;
			sortOrder?: /* Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			filters?: /* Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes. */ Parameters.Filters;
			isFavorite?: /* Optional filter by items that are marked as favorite, or not. */ Parameters.IsFavorite;
			mediaTypes?: /* Optional filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			imageTypes?: /* Optional. If specified, results will be filtered based on those containing image types. This allows multiple, comma delimited. */ Parameters.ImageTypes;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
			isPlayed?: /* Optional filter by items that are played, or not. */ Parameters.IsPlayed;
			genres?: /* Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited. */ Parameters.Genres;
			officialRatings?: /* Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited. */ Parameters.OfficialRatings;
			tags?: /* Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited. */ Parameters.Tags;
			years?: /* Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited. */ Parameters.Years;
			enableUserData?: /* Optional, include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional, the max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			person?: /* Optional. If specified, results will be filtered to include only those containing the specified person. */ Parameters.Person;
			personIds?: /* Optional. If specified, results will be filtered to include only those containing the specified person id. */ Parameters.PersonIds;
			personTypes?: /* Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited. */ Parameters.PersonTypes;
			studios?: /* Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited. */ Parameters.Studios;
			artists?: /* Optional. If specified, results will be filtered based on artists. This allows multiple, pipe delimited. */ Parameters.Artists;
			excludeArtistIds?: /* Optional. If specified, results will be filtered based on artist id. This allows multiple, pipe delimited. */ Parameters.ExcludeArtistIds;
			artistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified artist id. */ Parameters.ArtistIds;
			albumArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified album artist id. */ Parameters.AlbumArtistIds;
			contributingArtistIds?: /* Optional. If specified, results will be filtered to include only those containing the specified contributing artist id. */ Parameters.ContributingArtistIds;
			albums?: /* Optional. If specified, results will be filtered based on album. This allows multiple, pipe delimited. */ Parameters.Albums;
			albumIds?: /* Optional. If specified, results will be filtered based on album id. This allows multiple, pipe delimited. */ Parameters.AlbumIds;
			ids?: /* Optional. If specific items are needed, specify a list of item id's to retrieve. This allows multiple, comma delimited. */ Parameters.Ids;
			videoTypes?: /* Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple, comma delimited. */ Parameters.VideoTypes;
			minOfficialRating?: /* Optional filter by minimum official rating (PG, PG-13, TV-MA, etc). */ Parameters.MinOfficialRating;
			isLocked?: /* Optional filter by items that are locked. */ Parameters.IsLocked;
			isPlaceHolder?: /* Optional filter by items that are placeholders. */ Parameters.IsPlaceHolder;
			hasOfficialRating?: /* Optional filter by items that have official ratings. */ Parameters.HasOfficialRating;
			collapseBoxSetItems?: /* Whether or not to hide items behind their boxsets. */ Parameters.CollapseBoxSetItems;
			minWidth?: /* Optional. Filter by the minimum width of the item. */ Parameters.MinWidth /* int32 */;
			minHeight?: /* Optional. Filter by the minimum height of the item. */ Parameters.MinHeight /* int32 */;
			maxWidth?: /* Optional. Filter by the maximum width of the item. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* Optional. Filter by the maximum height of the item. */ Parameters.MaxHeight /* int32 */;
			is3D?: /* Optional filter by items that are 3D, or not. */ Parameters.Is3D;
			seriesStatus?: /* Optional filter by Series Status. Allows multiple, comma delimited. */ Parameters.SeriesStatus;
			nameStartsWithOrGreater?: /* Optional filter by items whose name is sorted equally or greater than a given input string. */ Parameters.NameStartsWithOrGreater;
			nameStartsWith?: /* Optional filter by items whose name is sorted equally than a given input string. */ Parameters.NameStartsWith;
			nameLessThan?: /* Optional filter by items whose name is equally or lesser than a given input string. */ Parameters.NameLessThan;
			studioIds?: /* Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited. */ Parameters.StudioIds;
			genreIds?: /* Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited. */ Parameters.GenreIds;
			enableTotalRecordCount?: /* Optional. Enable the total record count. */ Parameters.EnableTotalRecordCount;
			enableImages?: /* Optional, include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetTunerHostTypes {
		namespace Responses {
			export type $200 = Components.Schemas.NameIdPair[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetUniversalAudioStream {
		namespace Parameters {
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. The audio codec to transcode to.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The audio container.
			 */
			export type Container = string[];
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Whether to enable redirection. Defaults to true.
			 */
			export type EnableRedirection = boolean;
			/**
			 * Optional. Whether to enable remote media.
			 */
			export type EnableRemoteMedia = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. The maximum number of audio channels.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. The maximum audio sample rate.
			 */
			export type MaxAudioSampleRate = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. The number of how many audio channels to transcode to.
			 */
			export type TranscodingAudioChannels = number; // int32
			/**
			 * Optional. The container to transcode to.
			 */
			export type TranscodingContainer = string;
			/**
			 * Optional. The transcoding protocol.
			 */
			export type TranscodingProtocol = string;
			/**
			 * Optional. The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* Optional. The audio container. */ Parameters.Container;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			userId?: /* Optional. The user id. */ Parameters.UserId /* uuid */;
			audioCodec?: /* Optional. The audio codec to transcode to. */ Parameters.AudioCodec;
			maxAudioChannels?: /* Optional. The maximum number of audio channels. */ Parameters.MaxAudioChannels /* int32 */;
			transcodingAudioChannels?: /* Optional. The number of how many audio channels to transcode to. */ Parameters.TranscodingAudioChannels /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			transcodingContainer?: /* Optional. The container to transcode to. */ Parameters.TranscodingContainer;
			transcodingProtocol?: /* Optional. The transcoding protocol. */ Parameters.TranscodingProtocol;
			maxAudioSampleRate?: /* Optional. The maximum audio sample rate. */ Parameters.MaxAudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			enableRemoteMedia?: /* Optional. Whether to enable remote media. */ Parameters.EnableRemoteMedia;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			enableRedirection?: /* Whether to enable redirection. Defaults to true. */ Parameters.EnableRedirection;
		}
		namespace Responses {
			export interface $302 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetUpcomingEpisodes {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImges = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Optional. The record index to start at. All items with a lower index will be dropped from the results.
			 */
			export type StartIndex = number; // int32
			/**
			 * The user id of the user to get the upcoming episodes for.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			userId?: /* The user id of the user to get the upcoming episodes for. */ Parameters.UserId /* uuid */;
			startIndex?: /* Optional. The record index to start at. All items with a lower index will be dropped from the results. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			parentId?: /* Optional. Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			enableImges?: /* Optional. Include image information in output. */ Parameters.EnableImges;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetUserById {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class UserDto. */ Components.Schemas.UserDto;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetUserImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetUserImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetUserViews {
		namespace Parameters {
			/**
			 * Whether or not to include external views such as channels or live tv.
			 */
			export type IncludeExternalContent = boolean;
			/**
			 * Whether or not to include hidden content.
			 */
			export type IncludeHidden = boolean;
			/**
			 * Preset views.
			 */
			export type PresetViews = string[];
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
		}
		export interface QueryParameters {
			includeExternalContent?: /* Whether or not to include external views such as channels or live tv. */ Parameters.IncludeExternalContent;
			presetViews?: /* Preset views. */ Parameters.PresetViews;
			includeHidden?: /* Whether or not to include hidden content. */ Parameters.IncludeHidden;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
		}
	}
	namespace GetUsers {
		namespace Parameters {
			/**
			 * Optional filter by IsDisabled=true or false.
			 */
			export type IsDisabled = boolean;
			/**
			 * Optional filter by IsHidden=true or false.
			 */
			export type IsHidden = boolean;
		}
		export interface QueryParameters {
			isHidden?: /* Optional filter by IsHidden=true or false. */ Parameters.IsHidden;
			isDisabled?: /* Optional filter by IsDisabled=true or false. */ Parameters.IsDisabled;
		}
		namespace Responses {
			export type $200 = /* Class UserDto. */ Components.Schemas.UserDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetUtcTime {
		namespace Responses {
			export type $200 = /* Class UtcTimeResponse. */ Components.Schemas.UtcTimeResponse;
		}
	}
	namespace GetVariantHlsAudioPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetVariantHlsVideoPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetVideoStream {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace GetVideoStreamByContainer {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamporphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			export type Stream = string;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			container: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
			stream: Parameters.Stream;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamporphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace GetVirtualFolders {
		namespace Responses {
			export type $200 = /* Used to hold information about a user's list of configured virtual folders. */ Components.Schemas.VirtualFolderInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetWakeOnLanInfo {
		namespace Responses {
			export type $200 = /* Provides the MAC address and port for wake-on-LAN functionality. */ Components.Schemas.WakeOnLanInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace GetYear {
		namespace Parameters {
			/**
			 * Optional. Filter by user id, and attach user data.
			 */
			export type UserId = string; // uuid
			/**
			 * The year.
			 */
			export type Year = number; // int32
		}
		export interface PathParameters {
			year: /* The year. */ Parameters.Year /* int32 */;
		}
		export interface QueryParameters {
			userId?: /* Optional. Filter by user id, and attach user data. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export type $200
			/**
			 * This is strictly used as a data transfer object from the api layer.
			 * This holds information about a BaseItem in a format that is convenient for the client.
			 */ = Components.Schemas.BaseItemDto;
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace GetYears {
		namespace Parameters {
			/**
			 * Optional. The image types to include in the output.
			 */
			export type EnableImageTypes = /* Enum ImageType. */ Components.Schemas.ImageType[];
			/**
			 * Optional. Include image information in output.
			 */
			export type EnableImages = boolean;
			/**
			 * Optional. Include user data.
			 */
			export type EnableUserData = boolean;
			/**
			 * Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited.
			 */
			export type ExcludeItemTypes = string[];
			/**
			 * Optional. Specify additional fields of information to return in the output.
			 */
			export type Fields = /* Used to control the data that gets attached to DtoBaseItems. */ Components.Schemas.ItemFields[];
			/**
			 * Optional. The max number of images to return, per image type.
			 */
			export type ImageTypeLimit = number; // int32
			/**
			 * Optional. If specified, results will be included based on item type. This allows multiple, comma delimited.
			 */
			export type IncludeItemTypes = string[];
			/**
			 * Optional. The maximum number of records to return.
			 */
			export type Limit = number; // int32
			/**
			 * Optional. Filter by MediaType. Allows multiple, comma delimited.
			 */
			export type MediaTypes = string[];
			/**
			 * Specify this to localize the search to a specific item or folder. Omit to use the root.
			 */
			export type ParentId = string; // uuid
			/**
			 * Search recursively.
			 */
			export type Recursive = boolean;
			/**
			 * Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime.
			 */
			export type SortBy = string[];
			/**
			 * Sort Order - Ascending,Descending.
			 */
			export type SortOrder = /* An enum representing the sorting order. */ Components.Schemas.SortOrder[];
			/**
			 * Skips over a given number of items within the results. Use for paging.
			 */
			export type StartIndex = number; // int32
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			startIndex?: /* Skips over a given number of items within the results. Use for paging. */ Parameters.StartIndex /* int32 */;
			limit?: /* Optional. The maximum number of records to return. */ Parameters.Limit /* int32 */;
			sortOrder?: /* Sort Order - Ascending,Descending. */ Parameters.SortOrder;
			parentId?: /* Specify this to localize the search to a specific item or folder. Omit to use the root. */ Parameters.ParentId /* uuid */;
			fields?: /* Optional. Specify additional fields of information to return in the output. */ Parameters.Fields;
			excludeItemTypes?: /* Optional. If specified, results will be excluded based on item type. This allows multiple, comma delimited. */ Parameters.ExcludeItemTypes;
			includeItemTypes?: /* Optional. If specified, results will be included based on item type. This allows multiple, comma delimited. */ Parameters.IncludeItemTypes;
			mediaTypes?: /* Optional. Filter by MediaType. Allows multiple, comma delimited. */ Parameters.MediaTypes;
			sortBy?: /* Optional. Specify one or more sort orders, comma delimited. Options: Album, AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated, DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue, Runtime. */ Parameters.SortBy;
			enableUserData?: /* Optional. Include user data. */ Parameters.EnableUserData;
			imageTypeLimit?: /* Optional. The max number of images to return, per image type. */ Parameters.ImageTypeLimit /* int32 */;
			enableImageTypes?: /* Optional. The image types to include in the output. */ Parameters.EnableImageTypes;
			userId?: /* User Id. */ Parameters.UserId /* uuid */;
			recursive?: /* Search recursively. */ Parameters.Recursive;
			enableImages?: /* Optional. Include image information in output. */ Parameters.EnableImages;
		}
		namespace Responses {
			export type $200 = Components.Schemas.BaseItemDtoQueryResult;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace HeadArtistImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Artist name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Artist name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadAudioStream {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The audio container.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* The audio container. */ Parameters.Container;
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace HeadAudioStreamByContainer {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The audio container.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamporphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			container: /* The audio container. */ Parameters.Container;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamporphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace HeadGenreImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadGenreImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadItemImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			format?: /* Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image. */ Parameters.Format;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadItemImage2 {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			maxWidth: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			tag: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			percentPlayed: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadItemImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			format?: /* Optional. The MediaBrowser.Model.Drawing.ImageFormat of the returned image. */ Parameters.Format;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadMasterHlsAudioPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Enable adaptive bitrate streaming.
			 */
			export type EnableAdaptiveBitrateStreaming = boolean;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
			enableAdaptiveBitrateStreaming?: /* Enable adaptive bitrate streaming. */ Parameters.EnableAdaptiveBitrateStreaming;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace HeadMasterHlsVideoPlaylist {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Enable adaptive bitrate streaming.
			 */
			export type EnableAdaptiveBitrateStreaming = boolean;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
			enableAdaptiveBitrateStreaming?: /* Enable adaptive bitrate streaming. */ Parameters.EnableAdaptiveBitrateStreaming;
		}
		namespace Responses {
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace HeadMusicGenreImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Music genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Music genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadMusicGenreImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Music genre name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Music genre name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadPersonImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Person name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Person name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadPersonImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Person name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Person name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadStudioImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadStudioImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Studio name.
			 */
			export type Name = string;
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			name: /* Studio name. */ Parameters.Name;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadUniversalAudioStream {
		namespace Parameters {
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. The audio codec to transcode to.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * Optional. The audio container.
			 */
			export type Container = string[];
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Whether to enable redirection. Defaults to true.
			 */
			export type EnableRedirection = boolean;
			/**
			 * Optional. Whether to enable remote media.
			 */
			export type EnableRemoteMedia = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. The maximum number of audio channels.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. The maximum audio sample rate.
			 */
			export type MaxAudioSampleRate = number; // int32
			/**
			 * Optional. The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. The number of how many audio channels to transcode to.
			 */
			export type TranscodingAudioChannels = number; // int32
			/**
			 * Optional. The container to transcode to.
			 */
			export type TranscodingContainer = string;
			/**
			 * Optional. The transcoding protocol.
			 */
			export type TranscodingProtocol = string;
			/**
			 * Optional. The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* Optional. The audio container. */ Parameters.Container;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			userId?: /* Optional. The user id. */ Parameters.UserId /* uuid */;
			audioCodec?: /* Optional. The audio codec to transcode to. */ Parameters.AudioCodec;
			maxAudioChannels?: /* Optional. The maximum number of audio channels. */ Parameters.MaxAudioChannels /* int32 */;
			transcodingAudioChannels?: /* Optional. The number of how many audio channels to transcode to. */ Parameters.TranscodingAudioChannels /* int32 */;
			maxStreamingBitrate?: /* Optional. The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			transcodingContainer?: /* Optional. The container to transcode to. */ Parameters.TranscodingContainer;
			transcodingProtocol?: /* Optional. The transcoding protocol. */ Parameters.TranscodingProtocol;
			maxAudioSampleRate?: /* Optional. The maximum audio sample rate. */ Parameters.MaxAudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			enableRemoteMedia?: /* Optional. Whether to enable remote media. */ Parameters.EnableRemoteMedia;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			enableRedirection?: /* Whether to enable redirection. Defaults to true. */ Parameters.EnableRedirection;
		}
		namespace Responses {
			export interface $302 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace HeadUserImage {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
			imageIndex?: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadUserImageByIndex {
		namespace Parameters {
			/**
			 * Optional. Add a played indicator.
			 */
			export type AddPlayedIndicator = boolean;
			/**
			 * Optional. Apply a background color for transparent images.
			 */
			export type BackgroundColor = string;
			/**
			 * Optional. Blur image.
			 */
			export type Blur = number; // int32
			/**
			 * Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.
			 */
			export type CropWhitespace = boolean;
			/**
			 * Optional. Apply a foreground layer on top of the image.
			 */
			export type ForegroundLayer = string;
			/**
			 * Determines the output format of the image - original,gif,jpg,png.
			 */
			export type Format = /* Enum ImageOutputFormat. */ Components.Schemas.ImageFormat;
			/**
			 * The fixed image height to return.
			 */
			export type Height = number; // int32
			/**
			 * Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * The maximum image height to return.
			 */
			export type MaxHeight = number; // int32
			/**
			 * The maximum image width to return.
			 */
			export type MaxWidth = number; // int32
			/**
			 * Optional. Percent to render for the percent played overlay.
			 */
			export type PercentPlayed = number; // double
			/**
			 * Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.
			 */
			export type Quality = number; // int32
			/**
			 * Optional. Supply the cache tag from the item object to receive strong caching headers.
			 */
			export type Tag = string;
			/**
			 * Optional. Unplayed count overlay to render.
			 */
			export type UnplayedCount = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * The fixed image width to return.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			tag?: /* Optional. Supply the cache tag from the item object to receive strong caching headers. */ Parameters.Tag;
			format?: /* Determines the output format of the image - original,gif,jpg,png. */ Parameters.Format;
			maxWidth?: /* The maximum image width to return. */ Parameters.MaxWidth /* int32 */;
			maxHeight?: /* The maximum image height to return. */ Parameters.MaxHeight /* int32 */;
			percentPlayed?: /* Optional. Percent to render for the percent played overlay. */ Parameters.PercentPlayed /* double */;
			unplayedCount?: /* Optional. Unplayed count overlay to render. */ Parameters.UnplayedCount /* int32 */;
			width?: /* The fixed image width to return. */ Parameters.Width /* int32 */;
			height?: /* The fixed image height to return. */ Parameters.Height /* int32 */;
			quality?: /* Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases. */ Parameters.Quality /* int32 */;
			cropWhitespace?: /* Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art. */ Parameters.CropWhitespace;
			addPlayedIndicator?: /* Optional. Add a played indicator. */ Parameters.AddPlayedIndicator;
			blur?: /* Optional. Blur image. */ Parameters.Blur /* int32 */;
			backgroundColor?: /* Optional. Apply a background color for transparent images. */ Parameters.BackgroundColor;
			foregroundLayer?: /* Optional. Apply a foreground layer on top of the image. */ Parameters.ForegroundLayer;
		}
		namespace Responses {
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace HeadVideoStream {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamorphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment length.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			container?: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment length. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamorphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace HeadVideoStreamByContainer {
		namespace Parameters {
			/**
			 * Whether or not to allow copying of the audio stream url.
			 */
			export type AllowAudioStreamCopy = boolean;
			/**
			 * Whether or not to allow copying of the video stream url.
			 */
			export type AllowVideoStreamCopy = boolean;
			/**
			 * Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults.
			 */
			export type AudioBitRate = number; // int32
			/**
			 * Optional. Specify a specific number of audio channels to encode to, e.g. 2.
			 */
			export type AudioChannels = number; // int32
			/**
			 * Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma.
			 */
			export type AudioCodec = string;
			/**
			 * Optional. Specify a specific audio sample rate, e.g. 44100.
			 */
			export type AudioSampleRate = number; // int32
			/**
			 * Optional. The index of the audio stream to use. If omitted the first audio stream will be used.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Optional. Whether to break on non key frames.
			 */
			export type BreakOnNonKeyFrames = boolean;
			/**
			 * The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv.
			 */
			export type Container = string;
			/**
			 * Optional. The MediaBrowser.Model.Dlna.EncodingContext.
			 */
			export type Context = Components.Schemas.EncodingContext;
			/**
			 * Whether or not to copy timestamps when transcoding with an offset. Defaults to false.
			 */
			export type CopyTimestamps = boolean;
			/**
			 * Optional. The limit of how many cpu cores to use.
			 */
			export type CpuCoreLimit = number; // int32
			/**
			 * Optional. Whether to deinterlace the video.
			 */
			export type DeInterlace = boolean;
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * Optional. The dlna device profile id to utilize.
			 */
			export type DeviceProfileId = string;
			/**
			 * Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true.
			 */
			export type EnableAutoStreamCopy = boolean;
			/**
			 * Optional. Whether to enable the MpegtsM2Ts mode.
			 */
			export type EnableMpegtsM2TsMode = boolean;
			/**
			 * Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type Framerate = number; // float
			/**
			 * Optional. The fixed vertical resolution of the encoded video.
			 */
			export type Height = number; // int32
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1.
			 */
			export type Level = string;
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * Optional. The maximum audio bit depth.
			 */
			export type MaxAudioBitDepth = number; // int32
			/**
			 * Optional. Specify a maximum number of audio channels to encode to, e.g. 2.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements.
			 */
			export type MaxFramerate = number; // float
			/**
			 * Optional.
			 */
			export type MaxRefFrames = number; // int32
			/**
			 * Optional. The maximum video bit depth.
			 */
			export type MaxVideoBitDepth = number; // int32
			/**
			 * The media version id, if playing an alternate version.
			 */
			export type MediaSourceId = string;
			/**
			 * The minimum number of segments.
			 */
			export type MinSegments = number; // int32
			/**
			 * The streaming parameters.
			 */
			export type Params = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high.
			 */
			export type Profile = string;
			/**
			 * Optional. Whether to require avc.
			 */
			export type RequireAvc = boolean;
			/**
			 * Optional. Whether to require a non anamporphic stream.
			 */
			export type RequireNonAnamorphic = boolean;
			/**
			 * The segment container.
			 */
			export type SegmentContainer = string;
			/**
			 * The segment lenght.
			 */
			export type SegmentLength = number; // int32
			/**
			 * Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false.
			 */
			export type Static = boolean;
			export type Stream = string;
			/**
			 * Optional. The streaming options.
			 */
			export type StreamOptions = {
				[name: string]: string;
			};
			/**
			 * Optional. Specify a subtitle codec to encode to.
			 */
			export type SubtitleCodec = string;
			/**
			 * Optional. Specify the subtitle delivery method.
			 */
			export type SubtitleMethod = Components.Schemas.SubtitleDeliveryMethod;
			/**
			 * Optional. The index of the subtitle stream to use. If omitted no subtitles will be used.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The tag.
			 */
			export type Tag = string;
			/**
			 * Optional. The transcoding reason.
			 */
			export type TranscodeReasons = string;
			/**
			 * Optional. The maximum number of audio channels to transcode.
			 */
			export type TranscodingMaxAudioChannels = number; // int32
			/**
			 * Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults.
			 */
			export type VideoBitRate = number; // int32
			/**
			 * Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv.
			 */
			export type VideoCodec = string;
			/**
			 * Optional. The index of the video stream to use. If omitted the first video stream will be used.
			 */
			export type VideoStreamIndex = number; // int32
			/**
			 * Optional. The fixed horizontal resolution of the encoded video.
			 */
			export type Width = number; // int32
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			container: /* The video container. Possible values are: ts, webm, asf, wmv, ogv, mp4, m4v, mkv, mpeg, mpg, avi, 3gp, wmv, wtv, m2ts, mov, iso, flv. */ Parameters.Container;
			stream: Parameters.Stream;
		}
		export interface QueryParameters {
			static?: /* Optional. If true, the original file will be streamed statically without any encoding. Use either no url extension or the original file extension. true/false. */ Parameters.Static;
			params?: /* The streaming parameters. */ Parameters.Params;
			tag?: /* The tag. */ Parameters.Tag;
			deviceProfileId?: /* Optional. The dlna device profile id to utilize. */ Parameters.DeviceProfileId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			segmentContainer?: /* The segment container. */ Parameters.SegmentContainer;
			segmentLength?: /* The segment lenght. */ Parameters.SegmentLength /* int32 */;
			minSegments?: /* The minimum number of segments. */ Parameters.MinSegments /* int32 */;
			mediaSourceId?: /* The media version id, if playing an alternate version. */ Parameters.MediaSourceId;
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			audioCodec?: /* Optional. Specify a audio codec to encode to, e.g. mp3. If omitted the server will auto-select using the url's extension. Options: aac, mp3, vorbis, wma. */ Parameters.AudioCodec;
			enableAutoStreamCopy?: /* Whether or not to allow automatic stream copy if requested values match the original source. Defaults to true. */ Parameters.EnableAutoStreamCopy;
			allowVideoStreamCopy?: /* Whether or not to allow copying of the video stream url. */ Parameters.AllowVideoStreamCopy;
			allowAudioStreamCopy?: /* Whether or not to allow copying of the audio stream url. */ Parameters.AllowAudioStreamCopy;
			breakOnNonKeyFrames?: /* Optional. Whether to break on non key frames. */ Parameters.BreakOnNonKeyFrames;
			audioSampleRate?: /* Optional. Specify a specific audio sample rate, e.g. 44100. */ Parameters.AudioSampleRate /* int32 */;
			maxAudioBitDepth?: /* Optional. The maximum audio bit depth. */ Parameters.MaxAudioBitDepth /* int32 */;
			audioBitRate?: /* Optional. Specify an audio bitrate to encode to, e.g. 128000. If omitted this will be left to encoder defaults. */ Parameters.AudioBitRate /* int32 */;
			audioChannels?: /* Optional. Specify a specific number of audio channels to encode to, e.g. 2. */ Parameters.AudioChannels /* int32 */;
			maxAudioChannels?: /* Optional. Specify a maximum number of audio channels to encode to, e.g. 2. */ Parameters.MaxAudioChannels /* int32 */;
			profile?: /* Optional. Specify a specific an encoder profile (varies by encoder), e.g. main, baseline, high. */ Parameters.Profile;
			level?: /* Optional. Specify a level for the encoder profile (varies by encoder), e.g. 3, 3.1. */ Parameters.Level;
			framerate?: /* Optional. A specific video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.Framerate /* float */;
			maxFramerate?: /* Optional. A specific maximum video framerate to encode to, e.g. 23.976. Generally this should be omitted unless the device has specific requirements. */ Parameters.MaxFramerate /* float */;
			copyTimestamps?: /* Whether or not to copy timestamps when transcoding with an offset. Defaults to false. */ Parameters.CopyTimestamps;
			startTimeTicks?: /* Optional. Specify a starting offset, in ticks. 1 tick = 10000 ms. */ Parameters.StartTimeTicks /* int64 */;
			width?: /* Optional. The fixed horizontal resolution of the encoded video. */ Parameters.Width /* int32 */;
			height?: /* Optional. The fixed vertical resolution of the encoded video. */ Parameters.Height /* int32 */;
			videoBitRate?: /* Optional. Specify a video bitrate to encode to, e.g. 500000. If omitted this will be left to encoder defaults. */ Parameters.VideoBitRate /* int32 */;
			subtitleStreamIndex?: /* Optional. The index of the subtitle stream to use. If omitted no subtitles will be used. */ Parameters.SubtitleStreamIndex /* int32 */;
			subtitleMethod?: /* Optional. Specify the subtitle delivery method. */ Parameters.SubtitleMethod;
			maxRefFrames?: /* Optional. */ Parameters.MaxRefFrames /* int32 */;
			maxVideoBitDepth?: /* Optional. The maximum video bit depth. */ Parameters.MaxVideoBitDepth /* int32 */;
			requireAvc?: /* Optional. Whether to require avc. */ Parameters.RequireAvc;
			deInterlace?: /* Optional. Whether to deinterlace the video. */ Parameters.DeInterlace;
			requireNonAnamorphic?: /* Optional. Whether to require a non anamporphic stream. */ Parameters.RequireNonAnamorphic;
			transcodingMaxAudioChannels?: /* Optional. The maximum number of audio channels to transcode. */ Parameters.TranscodingMaxAudioChannels /* int32 */;
			cpuCoreLimit?: /* Optional. The limit of how many cpu cores to use. */ Parameters.CpuCoreLimit /* int32 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			enableMpegtsM2TsMode?: /* Optional. Whether to enable the MpegtsM2Ts mode. */ Parameters.EnableMpegtsM2TsMode;
			videoCodec?: /* Optional. Specify a video codec to encode to, e.g. h264. If omitted the server will auto-select using the url's extension. Options: h265, h264, mpeg4, theora, vpx, wmv. */ Parameters.VideoCodec;
			subtitleCodec?: /* Optional. Specify a subtitle codec to encode to. */ Parameters.SubtitleCodec;
			transcodeReasons?: /* Optional. The transcoding reason. */ Parameters.TranscodeReasons;
			audioStreamIndex?: /* Optional. The index of the audio stream to use. If omitted the first audio stream will be used. */ Parameters.AudioStreamIndex /* int32 */;
			videoStreamIndex?: /* Optional. The index of the video stream to use. If omitted the first video stream will be used. */ Parameters.VideoStreamIndex /* int32 */;
			context?: /* Optional. The MediaBrowser.Model.Dlna.EncodingContext. */ Parameters.Context;
			streamOptions?: /* Optional. The streaming options. */ Parameters.StreamOptions;
		}
	}
	namespace Initiate {
		namespace Responses {
			export type $200 = /* Stores the result of an incoming quick connect request. */ Components.Schemas.QuickConnectResult;
			export interface $401 {}
		}
	}
	namespace InstallPackage {
		namespace Parameters {
			/**
			 * GUID of the associated assembly.
			 */
			export type AssemblyGuid = string; // uuid
			/**
			 * Package name.
			 */
			export type Name = string;
			/**
			 * Optional. Specify the repository to install from.
			 */
			export type RepositoryUrl = string;
			/**
			 * Optional version. Defaults to latest version.
			 */
			export type Version = string;
		}
		export interface PathParameters {
			name: /* Package name. */ Parameters.Name;
		}
		export interface QueryParameters {
			assemblyGuid?: /* GUID of the associated assembly. */ Parameters.AssemblyGuid /* uuid */;
			version?: /* Optional version. Defaults to latest version. */ Parameters.Version;
			repositoryUrl?: /* Optional. Specify the repository to install from. */ Parameters.RepositoryUrl;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace MarkFavoriteItem {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace MarkPlayedItem {
		namespace Parameters {
			/**
			 * Optional. The date the item was played.
			 */
			export type DatePlayed = string; // date-time
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			datePlayed?: /* Optional. The date the item was played. */ Parameters.DatePlayed /* date-time */;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace MarkUnplayedItem {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace MergeVersions {
		namespace Parameters {
			/**
			 * Item id list. This allows multiple, comma delimited.
			 */
			export type Ids = string /* uuid */[];
		}
		export interface QueryParameters {
			ids: /* Item id list. This allows multiple, comma delimited. */ Parameters.Ids;
		}
		namespace Responses {
			export interface $204 {}
			export type $400 = Components.Schemas.ProblemDetails;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace MoveItem {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string;
			/**
			 * The new index.
			 */
			export type NewIndex = number; // int32
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
		}
		export interface PathParameters {
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
			itemId: /* The item id. */ Parameters.ItemId;
			newIndex: /* The new index. */ Parameters.NewIndex /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace OnPlaybackProgress {
		namespace Parameters {
			/**
			 * The audio stream index.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Indicates if the player is muted.
			 */
			export type IsMuted = boolean;
			/**
			 * Indicates if the player is paused.
			 */
			export type IsPaused = boolean;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * The id of the MediaSource.
			 */
			export type MediaSourceId = string;
			/**
			 * The play method.
			 */
			export type PlayMethod = Components.Schemas.PlayMethod;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. The current position, in ticks. 1 tick = 10000 ms.
			 */
			export type PositionTicks = number; // int64
			/**
			 * The repeat mode.
			 */
			export type RepeatMode = Components.Schemas.RepeatMode;
			/**
			 * The subtitle stream index.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
			/**
			 * Scale of 0-100.
			 */
			export type VolumeLevel = number; // int32
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			mediaSourceId?: /* The id of the MediaSource. */ Parameters.MediaSourceId;
			positionTicks?: /* Optional. The current position, in ticks. 1 tick = 10000 ms. */ Parameters.PositionTicks /* int64 */;
			audioStreamIndex?: /* The audio stream index. */ Parameters.AudioStreamIndex /* int32 */;
			subtitleStreamIndex?: /* The subtitle stream index. */ Parameters.SubtitleStreamIndex /* int32 */;
			volumeLevel?: /* Scale of 0-100. */ Parameters.VolumeLevel /* int32 */;
			playMethod?: /* The play method. */ Parameters.PlayMethod;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			repeatMode?: /* The repeat mode. */ Parameters.RepeatMode;
			isPaused?: /* Indicates if the player is paused. */ Parameters.IsPaused;
			isMuted?: /* Indicates if the player is muted. */ Parameters.IsMuted;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace OnPlaybackStart {
		namespace Parameters {
			/**
			 * The audio stream index.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Indicates if the client can seek.
			 */
			export type CanSeek = boolean;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * The id of the MediaSource.
			 */
			export type MediaSourceId = string;
			/**
			 * The play method.
			 */
			export type PlayMethod = Components.Schemas.PlayMethod;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * The subtitle stream index.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			mediaSourceId?: /* The id of the MediaSource. */ Parameters.MediaSourceId;
			audioStreamIndex?: /* The audio stream index. */ Parameters.AudioStreamIndex /* int32 */;
			subtitleStreamIndex?: /* The subtitle stream index. */ Parameters.SubtitleStreamIndex /* int32 */;
			playMethod?: /* The play method. */ Parameters.PlayMethod;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			canSeek?: /* Indicates if the client can seek. */ Parameters.CanSeek;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace OnPlaybackStopped {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The live stream id.
			 */
			export type LiveStreamId = string;
			/**
			 * The id of the MediaSource.
			 */
			export type MediaSourceId = string;
			/**
			 * The next media type that will play.
			 */
			export type NextMediaType = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * Optional. The position, in ticks, where playback stopped. 1 tick = 10000 ms.
			 */
			export type PositionTicks = number; // int64
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			mediaSourceId?: /* The id of the MediaSource. */ Parameters.MediaSourceId;
			nextMediaType?: /* The next media type that will play. */ Parameters.NextMediaType;
			positionTicks?: /* Optional. The position, in ticks, where playback stopped. 1 tick = 10000 ms. */ Parameters.PositionTicks /* int64 */;
			liveStreamId?: /* The live stream id. */ Parameters.LiveStreamId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace OpenLiveStream {
		namespace Parameters {
			/**
			 * The audio stream index.
			 */
			export type AudioStreamIndex = number; // int32
			/**
			 * Whether to enable direct play. Default: true.
			 */
			export type EnableDirectPlay = boolean;
			/**
			 * Whether to enable direct stream. Default: true.
			 */
			export type EnableDirectStream = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The maximum number of audio channels.
			 */
			export type MaxAudioChannels = number; // int32
			/**
			 * The maximum streaming bitrate.
			 */
			export type MaxStreamingBitrate = number; // int32
			/**
			 * The open token.
			 */
			export type OpenToken = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
			/**
			 * The start time in ticks.
			 */
			export type StartTimeTicks = number; // int64
			/**
			 * The subtitle stream index.
			 */
			export type SubtitleStreamIndex = number; // int32
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface QueryParameters {
			openToken?: /* The open token. */ Parameters.OpenToken;
			userId?: /* The user id. */ Parameters.UserId /* uuid */;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
			maxStreamingBitrate?: /* The maximum streaming bitrate. */ Parameters.MaxStreamingBitrate /* int32 */;
			startTimeTicks?: /* The start time in ticks. */ Parameters.StartTimeTicks /* int64 */;
			audioStreamIndex?: /* The audio stream index. */ Parameters.AudioStreamIndex /* int32 */;
			subtitleStreamIndex?: /* The subtitle stream index. */ Parameters.SubtitleStreamIndex /* int32 */;
			maxAudioChannels?: /* The maximum number of audio channels. */ Parameters.MaxAudioChannels /* int32 */;
			itemId?: /* The item id. */ Parameters.ItemId /* uuid */;
			enableDirectPlay?: /* Whether to enable direct play. Default: true. */ Parameters.EnableDirectPlay;
			enableDirectStream?: /* Whether to enable direct stream. Default: true. */ Parameters.EnableDirectStream;
		}
		/**
		 * The open live stream dto.
		 */
		export type RequestBody = /* Open live stream dto. */ Components.Schemas.OpenLiveStreamDto;
		namespace Responses {
			export type $200 = Components.Schemas.LiveStreamResponse;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PingPlaybackSession {
		namespace Parameters {
			/**
			 * Playback session id.
			 */
			export type PlaySessionId = string;
		}
		export interface QueryParameters {
			playSessionId?: /* Playback session id. */ Parameters.PlaySessionId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace Play {
		namespace Parameters {
			/**
			 * The ids of the items to play, comma delimited.
			 */
			export type ItemIds = string /* uuid */[];
			/**
			 * The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now.
			 */
			export type PlayCommand = /* Enum PlayCommand. */ Components.Schemas.PlayCommand;
			/**
			 * The session id.
			 */
			export type SessionId = string;
			/**
			 * The starting position of the first item.
			 */
			export type StartPositionTicks = number; // int64
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
		}
		export interface QueryParameters {
			playCommand: /* The type of play command to issue (PlayNow, PlayNext, PlayLast). Clients who have not yet implemented play next and play last may play now. */ Parameters.PlayCommand;
			itemIds: /* The ids of the items to play, comma delimited. */ Parameters.ItemIds;
			startPositionTicks?: /* The starting position of the first item. */ Parameters.StartPositionTicks /* int64 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace Post {
		namespace Parameters {
			/**
			 * (Optional) Specifies the image refresh mode.
			 */
			export type ImageRefreshMode = Components.Schemas.MetadataRefreshMode;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * (Optional) Specifies the metadata refresh mode.
			 */
			export type MetadataRefreshMode = Components.Schemas.MetadataRefreshMode;
			/**
			 * (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh.
			 */
			export type ReplaceAllImages = boolean;
			/**
			 * (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh.
			 */
			export type ReplaceAllMetadata = boolean;
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			metadataRefreshMode?: /* (Optional) Specifies the metadata refresh mode. */ Parameters.MetadataRefreshMode;
			imageRefreshMode?: /* (Optional) Specifies the image refresh mode. */ Parameters.ImageRefreshMode;
			replaceAllMetadata?: /* (Optional) Determines if metadata should be replaced. Only applicable if mode is FullRefresh. */ Parameters.ReplaceAllMetadata;
			replaceAllImages?: /* (Optional) Determines if images should be replaced. Only applicable if mode is FullRefresh. */ Parameters.ReplaceAllImages;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace PostAddedMovies {
		namespace Parameters {
			/**
			 * The imdbId.
			 */
			export type ImdbId = string;
			/**
			 * The tmdbId.
			 */
			export type TmdbId = string;
		}
		export interface QueryParameters {
			tmdbId?: /* The tmdbId. */ Parameters.TmdbId;
			imdbId?: /* The imdbId. */ Parameters.ImdbId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostAddedSeries {
		namespace Parameters {
			/**
			 * The tvdbId.
			 */
			export type TvdbId = string;
		}
		export interface QueryParameters {
			tvdbId?: /* The tvdbId. */ Parameters.TvdbId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostCapabilities {
		namespace Parameters {
			/**
			 * The session id.
			 */
			export type Id = string;
			/**
			 * A list of playable media types, comma delimited. Audio, Video, Book, Photo.
			 */
			export type PlayableMediaTypes = string[];
			/**
			 * A list of supported remote control commands, comma delimited.
			 */
			export type SupportedCommands = /* This exists simply to identify a set of known commands. */ Components.Schemas.GeneralCommandType[];
			/**
			 * Determines whether media can be played remotely..
			 */
			export type SupportsMediaControl = boolean;
			/**
			 * Determines whether the device supports a unique identifier.
			 */
			export type SupportsPersistentIdentifier = boolean;
			/**
			 * Determines whether sync is supported.
			 */
			export type SupportsSync = boolean;
		}
		export interface QueryParameters {
			id?: /* The session id. */ Parameters.Id;
			playableMediaTypes?: /* A list of playable media types, comma delimited. Audio, Video, Book, Photo. */ Parameters.PlayableMediaTypes;
			supportedCommands?: /* A list of supported remote control commands, comma delimited. */ Parameters.SupportedCommands;
			supportsMediaControl?: /* Determines whether media can be played remotely.. */ Parameters.SupportsMediaControl;
			supportsSync?: /* Determines whether sync is supported. */ Parameters.SupportsSync;
			supportsPersistentIdentifier?: /* Determines whether the device supports a unique identifier. */ Parameters.SupportsPersistentIdentifier;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostFullCapabilities {
		namespace Parameters {
			/**
			 * The session id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id?: /* The session id. */ Parameters.Id;
		}
		/**
		 * The MediaBrowser.Model.Session.ClientCapabilities.
		 */
		export type RequestBody = /* Client capabilities dto. */ Components.Schemas.ClientCapabilitiesDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostPingSystem {
		namespace Responses {
			export type $200 = string;
		}
	}
	namespace PostUpdatedMedia {
		/**
		 * A list of updated media paths.
		 */
		export type RequestBody = /* Media Update Info Dto. */ Components.Schemas.MediaUpdateInfoDto[];
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostUpdatedMovies {
		namespace Parameters {
			/**
			 * The imdbId.
			 */
			export type ImdbId = string;
			/**
			 * The tmdbId.
			 */
			export type TmdbId = string;
		}
		export interface QueryParameters {
			tmdbId?: /* The tmdbId. */ Parameters.TmdbId;
			imdbId?: /* The imdbId. */ Parameters.ImdbId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostUpdatedSeries {
		namespace Parameters {
			/**
			 * The tvdbId.
			 */
			export type TvdbId = string;
		}
		export interface QueryParameters {
			tvdbId?: /* The tvdbId. */ Parameters.TvdbId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace PostUserImage {
		namespace Parameters {
			/**
			 * (Unused) Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * (Unused) Image index.
			 */
			export type Index = number; // int32
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User Id. */ Parameters.UserId /* uuid */;
			imageType: /* (Unused) Image type. */ Parameters.ImageType;
		}
		export interface QueryParameters {
			index?: /* (Unused) Image index. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace PostUserImageByIndex {
		namespace Parameters {
			/**
			 * (Unused) Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * (Unused) Image index.
			 */
			export type Index = number; // int32
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User Id. */ Parameters.UserId /* uuid */;
			imageType: /* (Unused) Image type. */ Parameters.ImageType;
			index: /* (Unused) Image index. */ Parameters.Index /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace ProcessConnectionManagerControlRequest {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace ProcessContentDirectoryControlRequest {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace ProcessMediaReceiverRegistrarControlRequest {
		namespace Parameters {
			/**
			 * Server UUID.
			 */
			export type ServerId = string;
		}
		export interface PathParameters {
			serverId: /* Server UUID. */ Parameters.ServerId;
		}
		namespace Responses {
			export type $200 = string; // binary
			export interface $503 {}
		}
	}
	namespace RefreshLibrary {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RemoveFromCollection {
		namespace Parameters {
			/**
			 * The collection id.
			 */
			export type CollectionId = string; // uuid
			/**
			 * Item ids, comma delimited.
			 */
			export type Ids = string /* uuid */[];
		}
		export interface PathParameters {
			collectionId: /* The collection id. */ Parameters.CollectionId /* uuid */;
		}
		export interface QueryParameters {
			ids: /* Item ids, comma delimited. */ Parameters.Ids;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RemoveFromPlaylist {
		namespace Parameters {
			/**
			 * The item ids, comma delimited.
			 */
			export type EntryIds = string[];
			/**
			 * The playlist id.
			 */
			export type PlaylistId = string;
		}
		export interface PathParameters {
			playlistId: /* The playlist id. */ Parameters.PlaylistId;
		}
		export interface QueryParameters {
			entryIds?: /* The item ids, comma delimited. */ Parameters.EntryIds;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RemoveMediaPath {
		namespace Parameters {
			/**
			 * The name of the library.
			 */
			export type Name = string;
			/**
			 * The path to remove.
			 */
			export type Path = string;
			/**
			 * Whether to refresh the library.
			 */
			export type RefreshLibrary = boolean;
		}
		export interface QueryParameters {
			name?: /* The name of the library. */ Parameters.Name;
			path?: /* The path to remove. */ Parameters.Path;
			refreshLibrary?: /* Whether to refresh the library. */ Parameters.RefreshLibrary;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RemoveUserFromSession {
		namespace Parameters {
			/**
			 * The session id.
			 */
			export type SessionId = string;
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RemoveVirtualFolder {
		namespace Parameters {
			/**
			 * The name of the folder.
			 */
			export type Name = string;
			/**
			 * Whether to refresh the library.
			 */
			export type RefreshLibrary = boolean;
		}
		export interface QueryParameters {
			name?: /* The name of the folder. */ Parameters.Name;
			refreshLibrary?: /* Whether to refresh the library. */ Parameters.RefreshLibrary;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RenameVirtualFolder {
		namespace Parameters {
			/**
			 * The name of the virtual folder.
			 */
			export type Name = string;
			/**
			 * The new name.
			 */
			export type NewName = string;
			/**
			 * Whether to refresh the library.
			 */
			export type RefreshLibrary = boolean;
		}
		export interface QueryParameters {
			name?: /* The name of the virtual folder. */ Parameters.Name;
			newName?: /* The new name. */ Parameters.NewName;
			refreshLibrary?: /* Whether to refresh the library. */ Parameters.RefreshLibrary;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
			export type $409 = Components.Schemas.ProblemDetails;
		}
	}
	namespace ReportPlaybackProgress {
		/**
		 * The playback progress info.
		 */
		export type RequestBody = /* Class PlaybackProgressInfo. */ Components.Schemas.PlaybackProgressInfo;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ReportPlaybackStart {
		/**
		 * The playback start info.
		 */
		export type RequestBody = /* Class PlaybackStartInfo. */ Components.Schemas.PlaybackStartInfo;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ReportPlaybackStopped {
		/**
		 * The playback stop info.
		 */
		export type RequestBody = /* Class PlaybackStopInfo. */ Components.Schemas.PlaybackStopInfo;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ReportSessionEnded {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ReportViewing {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string;
			/**
			 * The session id.
			 */
			export type SessionId = string;
		}
		export interface QueryParameters {
			sessionId?: /* The session id. */ Parameters.SessionId;
			itemId: /* The item id. */ Parameters.ItemId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ResetTuner {
		namespace Parameters {
			/**
			 * Tuner id.
			 */
			export type TunerId = string;
		}
		export interface PathParameters {
			tunerId: /* Tuner id. */ Parameters.TunerId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RestartApplication {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace RevokeKey {
		namespace Parameters {
			/**
			 * The access token to delete.
			 */
			export type Key = string;
		}
		export interface PathParameters {
			key: /* The access token to delete. */ Parameters.Key;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SearchRemoteSubtitles {
		namespace Parameters {
			/**
			 * Optional. Only show subtitles which are a perfect match.
			 */
			export type IsPerfectMatch = boolean;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * The language of the subtitles.
			 */
			export type Language = string;
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
			language: /* The language of the subtitles. */ Parameters.Language;
		}
		export interface QueryParameters {
			isPerfectMatch?: /* Optional. Only show subtitles which are a perfect match. */ Parameters.IsPerfectMatch;
		}
		namespace Responses {
			export type $200 = Components.Schemas.RemoteSubtitleInfo[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SendFullGeneralCommand {
		namespace Parameters {
			/**
			 * The session id.
			 */
			export type SessionId = string;
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
		}
		/**
		 * The MediaBrowser.Model.Session.GeneralCommand.
		 */
		export type RequestBody = Components.Schemas.GeneralCommand;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SendGeneralCommand {
		namespace Parameters {
			/**
			 * The command to send.
			 */
			export type Command = /* This exists simply to identify a set of known commands. */ Components.Schemas.GeneralCommandType;
			/**
			 * The session id.
			 */
			export type SessionId = string;
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
			command: /* The command to send. */ Parameters.Command;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SendMessageCommand {
		namespace Parameters {
			/**
			 * The message header.
			 */
			export type Header = string;
			/**
			 * The session id.
			 */
			export type SessionId = string;
			/**
			 * The message test.
			 */
			export type Text = string;
			/**
			 * The message timeout. If omitted the user will have to confirm viewing the message.
			 */
			export type TimeoutMs = number; // int64
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
		}
		export interface QueryParameters {
			text: /* The message test. */ Parameters.Text;
			header?: /* The message header. */ Parameters.Header;
			timeoutMs?: /* The message timeout. If omitted the user will have to confirm viewing the message. */ Parameters.TimeoutMs /* int64 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SendPlaystateCommand {
		namespace Parameters {
			/**
			 * The MediaBrowser.Model.Session.PlaystateCommand.
			 */
			export type Command = /* Enum PlaystateCommand. */ Components.Schemas.PlaystateCommand;
			/**
			 * The optional controlling user id.
			 */
			export type ControllingUserId = string;
			/**
			 * The optional position ticks.
			 */
			export type SeekPositionTicks = number; // int64
			/**
			 * The session id.
			 */
			export type SessionId = string;
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
			command: /* The MediaBrowser.Model.Session.PlaystateCommand. */ Parameters.Command;
		}
		export interface QueryParameters {
			seekPositionTicks?: /* The optional position ticks. */ Parameters.SeekPositionTicks /* int64 */;
			controllingUserId?: /* The optional controlling user id. */ Parameters.ControllingUserId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SendSystemCommand {
		namespace Parameters {
			/**
			 * The command to send.
			 */
			export type Command = /* This exists simply to identify a set of known commands. */ Components.Schemas.GeneralCommandType;
			/**
			 * The session id.
			 */
			export type SessionId = string;
		}
		export interface PathParameters {
			sessionId: /* The session id. */ Parameters.SessionId;
			command: /* The command to send. */ Parameters.Command;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SetChannelMapping {
		/**
		 * The set channel mapping dto.
		 */
		export type RequestBody = /* Set channel mapping dto. */ Components.Schemas.SetChannelMappingDto;
		namespace Responses {
			export type $200 = Components.Schemas.TunerChannelMapping;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SetItemImage {
		namespace Parameters {
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace SetItemImageByIndex {
		namespace Parameters {
			/**
			 * (Unused) Image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* (Unused) Image index. */ Parameters.ImageIndex /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace SetRead {
		namespace Parameters {
			export type UserId = string;
		}
		export interface PathParameters {
			userId: Parameters.UserId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SetRemoteAccess {
		/**
		 * The startup remote access dto.
		 */
		export type RequestBody = /* Startup remote access dto. */ Components.Schemas.StartupRemoteAccessDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SetRepositories {
		/**
		 * The list of package repositories.
		 */
		export type RequestBody = /* Class RepositoryInfo. */ Components.Schemas.RepositoryInfo[];
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SetUnread {
		namespace Parameters {
			export type UserId = string;
		}
		export interface PathParameters {
			userId: Parameters.UserId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ShutdownApplication {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace StartTask {
		namespace Parameters {
			/**
			 * Task Id.
			 */
			export type TaskId = string;
		}
		export interface PathParameters {
			taskId: /* Task Id. */ Parameters.TaskId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace StopEncodingProcess {
		namespace Parameters {
			/**
			 * The device id of the client requesting. Used to stop encoding processes when needed.
			 */
			export type DeviceId = string;
			/**
			 * The play session id.
			 */
			export type PlaySessionId = string;
		}
		export interface QueryParameters {
			deviceId?: /* The device id of the client requesting. Used to stop encoding processes when needed. */ Parameters.DeviceId;
			playSessionId?: /* The play session id. */ Parameters.PlaySessionId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace StopTask {
		namespace Parameters {
			/**
			 * Task Id.
			 */
			export type TaskId = string;
		}
		export interface PathParameters {
			taskId: /* Task Id. */ Parameters.TaskId;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace SyncPlayBuffering {
		/**
		 * The player status.
		 */
		export type RequestBody = /* Class BufferRequestDto. */ Components.Schemas.BufferRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayCreateGroup {
		/**
		 * The settings of the new group.
		 */
		export type RequestBody = /* Class NewGroupRequestDto. */ Components.Schemas.NewGroupRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayGetGroups {
		namespace Responses {
			export type $200 = /* Class GroupInfoDto. */ Components.Schemas.GroupInfoDto[];
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayJoinGroup {
		/**
		 * The group to join.
		 */
		export type RequestBody = /* Class JoinGroupRequestDto. */ Components.Schemas.JoinGroupRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayLeaveGroup {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayMovePlaylistItem {
		/**
		 * The new position for the item.
		 */
		export type RequestBody = /* Class MovePlaylistItemRequestDto. */ Components.Schemas.MovePlaylistItemRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayNextItem {
		/**
		 * The current item information.
		 */
		export type RequestBody = /* Class NextItemRequestDto. */ Components.Schemas.NextItemRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayPause {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayPing {
		/**
		 * The new ping.
		 */
		export type RequestBody = /* Class PingRequestDto. */ Components.Schemas.PingRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayPreviousItem {
		/**
		 * The current item information.
		 */
		export type RequestBody = /* Class PreviousItemRequestDto. */ Components.Schemas.PreviousItemRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayQueue {
		/**
		 * The items to add.
		 */
		export type RequestBody = /* Class QueueRequestDto. */ Components.Schemas.QueueRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayReady {
		/**
		 * The player status.
		 */
		export type RequestBody = /* Class ReadyRequest. */ Components.Schemas.ReadyRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayRemoveFromPlaylist {
		/**
		 * The items to remove.
		 */
		export type RequestBody = /* Class RemoveFromPlaylistRequestDto. */ Components.Schemas.RemoveFromPlaylistRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySeek {
		/**
		 * The new playback position.
		 */
		export type RequestBody = /* Class SeekRequestDto. */ Components.Schemas.SeekRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySetIgnoreWait {
		/**
		 * The settings to set.
		 */
		export type RequestBody = /* Class IgnoreWaitRequestDto. */ Components.Schemas.IgnoreWaitRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySetNewQueue {
		/**
		 * The new playlist to play in the group.
		 */
		export type RequestBody = /* Class PlayRequestDto. */ Components.Schemas.PlayRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySetPlaylistItem {
		/**
		 * The new item to play.
		 */
		export type RequestBody = /* Class SetPlaylistItemRequestDto. */ Components.Schemas.SetPlaylistItemRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySetRepeatMode {
		/**
		 * The new repeat mode.
		 */
		export type RequestBody = /* Class SetRepeatModeRequestDto. */ Components.Schemas.SetRepeatModeRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlaySetShuffleMode {
		/**
		 * The new shuffle mode.
		 */
		export type RequestBody = /* Class SetShuffleModeRequestDto. */ Components.Schemas.SetShuffleModeRequestDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayStop {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace SyncPlayUnpause {
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UninstallPlugin {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UninstallPluginByVersion {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
			/**
			 * Plugin version.
			 */
			export type Version = Components.Schemas.Version;
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
			version: /* Plugin version. */ Parameters.Version;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UnmarkFavoriteItem {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateConfiguration {
		/**
		 * Configuration.
		 */
		export type RequestBody = /* Represents the server configuration. */ Components.Schemas.ServerConfiguration;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateDeviceOptions {
		namespace Parameters {
			/**
			 * Device Id.
			 */
			export type Id = string;
		}
		export interface QueryParameters {
			id: /* Device Id. */ Parameters.Id;
		}
		/**
		 * Device Options.
		 */
		export type RequestBody = Components.Schemas.DeviceOptions;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateDisplayPreferences {
		namespace Parameters {
			/**
			 * Client.
			 */
			export type Client = string;
			/**
			 * Display preferences id.
			 */
			export type DisplayPreferencesId = string;
			/**
			 * User Id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			displayPreferencesId: /* Display preferences id. */ Parameters.DisplayPreferencesId;
		}
		export interface QueryParameters {
			userId: /* User Id. */ Parameters.UserId /* uuid */;
			client: /* Client. */ Parameters.Client;
		}
		/**
		 * New Display Preferences object.
		 */
		export type RequestBody = /* Defines the display preferences for any item that supports them (usually Folders). */ Components.Schemas.DisplayPreferencesDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateInitialConfiguration {
		/**
		 * The updated startup configuration.
		 */
		export type RequestBody = /* The startup configuration DTO. */ Components.Schemas.StartupConfigurationDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateItem {
		namespace Parameters {
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		/**
		 * The new item properties.
		 */
		export type RequestBody
		/**
		 * This is strictly used as a data transfer object from the api layer.
		 * This holds information about a BaseItem in a format that is convenient for the client.
		 */ = Components.Schemas.BaseItemDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateItemContentType {
		namespace Parameters {
			/**
			 * The content type of the item.
			 */
			export type ContentType = string;
			/**
			 * The item id.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			contentType?: /* The content type of the item. */ Parameters.ContentType;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateItemImageIndex {
		namespace Parameters {
			/**
			 * Old image index.
			 */
			export type ImageIndex = number; // int32
			/**
			 * Image type.
			 */
			export type ImageType = /* Enum ImageType. */ Components.Schemas.ImageType;
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * New image index.
			 */
			export type NewIndex = number; // int32
		}
		export interface PathParameters {
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
			imageType: /* Image type. */ Parameters.ImageType;
			imageIndex: /* Old image index. */ Parameters.ImageIndex /* int32 */;
		}
		export interface QueryParameters {
			newIndex?: /* New image index. */ Parameters.NewIndex /* int32 */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateLibraryOptions {
		/**
		 * The library name and options.
		 */
		export type RequestBody = /* Update library options dto. */ Components.Schemas.UpdateLibraryOptionsDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateMediaEncoderPath {
		/**
		 * Media encoder path form body.
		 */
		export type RequestBody = /* Media Encoder Path Dto. */ Components.Schemas.MediaEncoderPathDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateMediaPath {
		namespace Parameters {
			/**
			 * The name of the library.
			 */
			export type Name = string;
		}
		export interface QueryParameters {
			name?: /* The name of the library. */ Parameters.Name;
		}
		/**
		 * The path info.
		 */
		export type RequestBody = Components.Schemas.MediaPathInfo;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateNamedConfiguration {
		namespace Parameters {
			/**
			 * Configuration key.
			 */
			export type Key = string;
		}
		export interface PathParameters {
			key: /* Configuration key. */ Parameters.Key;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdatePluginConfiguration {
		namespace Parameters {
			/**
			 * Plugin id.
			 */
			export type PluginId = string; // uuid
		}
		export interface PathParameters {
			pluginId: /* Plugin id. */ Parameters.PluginId /* uuid */;
		}
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdatePluginSecurityInfo {
		/**
		 * Plugin security info.
		 */
		export type RequestBody = /* Plugin security info. */ Components.Schemas.PluginSecurityInfo;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateProfile {
		namespace Parameters {
			/**
			 * Profile id.
			 */
			export type ProfileId = string;
		}
		export interface PathParameters {
			profileId: /* Profile id. */ Parameters.ProfileId;
		}
		/**
		 * Device profile.
		 */
		export type RequestBody = /* Defines the MediaBrowser.Model.Dlna.DeviceProfile. */ Components.Schemas.DeviceProfile;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateSeriesTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		/**
		 * New series timer info.
		 */
		export type RequestBody = /* Class SeriesTimerInfoDto. */ Components.Schemas.SeriesTimerInfoDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateStartupUser {
		/**
		 * The DTO containing username and password.
		 */
		export type RequestBody = /* The startup user DTO. */ Components.Schemas.StartupUserDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateTask {
		namespace Parameters {
			/**
			 * Task Id.
			 */
			export type TaskId = string;
		}
		export interface PathParameters {
			taskId: /* Task Id. */ Parameters.TaskId;
		}
		/**
		 * Triggers.
		 */
		export type RequestBody = /* Class TaskTriggerInfo. */ Components.Schemas.TaskTriggerInfo[];
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateTimer {
		namespace Parameters {
			/**
			 * Timer id.
			 */
			export type TimerId = string;
		}
		export interface PathParameters {
			timerId: /* Timer id. */ Parameters.TimerId;
		}
		/**
		 * New timer info.
		 */
		export type RequestBody = Components.Schemas.TimerInfoDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateUser {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		/**
		 * The updated user model.
		 */
		export type RequestBody = /* Class UserDto. */ Components.Schemas.UserDto;
		namespace Responses {
			export interface $204 {}
			export type $400 = Components.Schemas.ProblemDetails;
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateUserConfiguration {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		/**
		 * The new user configuration.
		 */
		export type RequestBody = /* Class UserConfiguration. */ Components.Schemas.UserConfiguration;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateUserEasyPassword {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		/**
		 * The M:Jellyfin.Api.Controllers.UserController.UpdateUserEasyPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserEasyPassword) request.
		 */
		export type RequestBody = /* The update user easy password request body. */ Components.Schemas.UpdateUserEasyPassword;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateUserItemRating {
		namespace Parameters {
			/**
			 * Item id.
			 */
			export type ItemId = string; // uuid
			/**
			 * Whether this M:Jellyfin.Api.Controllers.UserLibraryController.UpdateUserItemRating(System.Guid,System.Guid,System.Nullable{System.Boolean}) is likes.
			 */
			export type Likes = boolean;
			/**
			 * User id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* User id. */ Parameters.UserId /* uuid */;
			itemId: /* Item id. */ Parameters.ItemId /* uuid */;
		}
		export interface QueryParameters {
			likes?: /* Whether this M:Jellyfin.Api.Controllers.UserLibraryController.UpdateUserItemRating(System.Guid,System.Guid,System.Nullable{System.Boolean}) is likes. */ Parameters.Likes;
		}
		namespace Responses {
			export type $200 = /* Class UserItemDataDto. */ Components.Schemas.UserItemDataDto;
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace UpdateUserPassword {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		/**
		 * The M:Jellyfin.Api.Controllers.UserController.UpdateUserPassword(System.Guid,Jellyfin.Api.Models.UserDtos.UpdateUserPassword) request.
		 */
		export type RequestBody = /* The update user password request body. */ Components.Schemas.UpdateUserPassword;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UpdateUserPolicy {
		namespace Parameters {
			/**
			 * The user id.
			 */
			export type UserId = string; // uuid
		}
		export interface PathParameters {
			userId: /* The user id. */ Parameters.UserId /* uuid */;
		}
		/**
		 * The new user policy.
		 */
		export type RequestBody = Components.Schemas.UserPolicy;
		namespace Responses {
			export interface $204 {}
			export type $400 = Components.Schemas.ProblemDetails;
			export interface $401 {}
			export type $403 = Components.Schemas.ProblemDetails;
		}
	}
	namespace UploadSubtitle {
		namespace Parameters {
			/**
			 * The item the subtitle belongs to.
			 */
			export type ItemId = string; // uuid
		}
		export interface PathParameters {
			itemId: /* The item the subtitle belongs to. */ Parameters.ItemId /* uuid */;
		}
		/**
		 * The request body.
		 */
		export type RequestBody = /* Upload subtitles dto. */ Components.Schemas.UploadSubtitleDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
		}
	}
	namespace ValidatePath {
		/**
		 * Validate request object.
		 */
		export type RequestBody = /* Validate path object. */ Components.Schemas.ValidatePathDto;
		namespace Responses {
			export interface $204 {}
			export interface $401 {}
			export interface $403 {}
			export type $404 = Components.Schemas.ProblemDetails;
		}
	}
}
